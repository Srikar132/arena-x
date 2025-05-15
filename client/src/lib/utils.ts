import axios from 'axios';
import { BASE_URL } from '../constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const api = axios.create({
  baseURL: BASE_URL,
});

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = date.getDate().toString().padStart(2, '0');
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'AM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Convert 0 to 12
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${month} ${day}, ${hours}:${minutes} ${ampm}`;
};
