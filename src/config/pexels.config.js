import { createClient } from 'pexels';

const API_KEY = import.meta.env.VITE_APP_PEXELS_API_KEY;

export const client = createClient(API_KEY);
