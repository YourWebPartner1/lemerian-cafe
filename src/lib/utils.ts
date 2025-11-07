import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind and conditional class names.
 * Used across ShadCN / Lovable components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
