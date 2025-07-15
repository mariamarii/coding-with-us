'use client';

import { useMutation } from '@tanstack/react-query';

type UseApiMutationParams<TInput, TOutput> = {
  url: string;
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  getBody: (data: TInput) => any;
  getHeaders?: () => HeadersInit;
  onSuccess?: (data: TOutput, input: TInput) => void;
  onError?: (error: Error, input: TInput) => void;
};

export function useApiMutation<TInput, TOutput = any>({
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

      const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(getBody(input)),
      });

      if (!res.ok) {
        const text = await res.text();
        let message = 'Request failed.';
        try {
          const json = text ? JSON.parse(text) : null;
          message = json?.message || message;
        } catch {
          message = text || message; // fallback to raw text
        }
        throw new Error(message);
      }

    
      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) return {} as TOutput;

      return await res.json();
    },
    onSuccess,
    onError,
  });
}
