import axios from 'axios';
import * as fs from 'fs';

function getProperty(key: string): string {
  const file = fs.readFileSync('config.properties', 'utf-8');
  const line = file.split('\n').find(l => l.startsWith(key));
  return line ? line.split('=')[1].trim() : '';
}

const BASE_URL = getProperty('baseUrl');

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});
