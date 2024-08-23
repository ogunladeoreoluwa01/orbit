import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isImage = (url: string): boolean => {
  return /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/.test(url);
};

export const isVideo = (url: string): boolean => {
  return /\.(mp4|webm|ogg|mov|avi|wmv|flv|mkv)$/.test(url);
};

export const getFileTypeFromUrl = (url: string): string => {
  const fileExtension = url.split(".").pop()?.toLowerCase();
  return fileExtension || "NF";
};
