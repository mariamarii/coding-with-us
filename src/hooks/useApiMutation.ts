'use client';

import { useMutation } from '@tanstack/react-query';

type UseApiMutationParams<TInput, TOutput> = {
  url: string;
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  getBody: (data: TInput) => Record<string, unknown>;
  getHeaders?: () => HeadersInit;
  onSuccess?: (data: TOutput, input: TInput) => void;
  onError?: (error: Error, input: TInput) => void;
};

export function useApiMutation<TInput, TOutput = unknown>({
  url,
  method = 'POST',
  getBody,
  getHeaders,
  onSuccess,
  onError,
}: UseApiMutationParams<TInput, TOutput>) {
  return useMutation({
    mutationFn: async (input: TInput) => {
      const headers = getHeaders ? getHeaders() : { 'Content-Type': 'application/json' };
      const body = JSON.stringify(getBody(input));

      console.log(`Making ${method} request to:`, url);
      console.log('Request headers:', headers);
      console.log('Request body:', body);

            try {
        const res = await fetch(url, {
          method,
          headers,
          body,
        });

        if (!res.ok) {
          const text = await res.text();
          let message = 'Request failed.';
          let errorDetails = {};
          
          try {
            const json = text ? JSON.parse(text) : null;
            message = json?.message || json?.error || message;
            errorDetails = json || {};
          } catch {
            message = text || message; // fallback to raw text
          }
          
          console.error('API Error Details:', {
            status: res.status,
            statusText: res.statusText,
            url,
            method,
            errorDetails,
            responseText: text
          });
          
          throw new Error(message);
        }

        const contentType = res.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) return {} as TOutput;

        return await res.json();
      } catch (error) {
        console.error('Network error in useApiMutation:', error);
        
        if (error instanceof Error) {
          // Check for specific network errors
          if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
            throw new Error('Unable to connect to the server. Please check your internet connection and try again.');
          }
          throw error;
        }
        throw new Error('Network error occurred. Please try again.');
      }
    },
    onSuccess,
    onError,
  });
}