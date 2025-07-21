import * as React from "react";
import { cn } from "@/lib/utils";

interface BaseProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

export function TypographyH4({ className, ...props }: BaseProps) {
  return <h4 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight text-gray-900", className)} {...props} />;
}

export function TypographyH6({ className, ...props }: BaseProps) {
  return <h6 className={cn("scroll-m-20 text-lg font-semibold tracking-tight text-gray-900", className)} {...props} />;
}

export function TypographyP({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("leading-6 text-sm text-gray-600", className)} {...props} />;
}

export function TypographySmall({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <small className={cn("text-xs font-medium leading-none text-gray-600", className)} {...props} />;
}