import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {createClient} from '@supabase/supabase-js'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const supabase = createClient(process.env.NEXT_PUBLIC_SUPA_URL as string, process.env.NEXT_PUBLIC_SUPA_KEY as string)