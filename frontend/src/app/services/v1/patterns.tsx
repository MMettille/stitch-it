import { v1BaseUrl } from "./v1BaseUrl"

export const getPatterns = async () => {
  const response = await fetch(`${v1BaseUrl}/patterns`, { cache: 'no-store' });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error('Failed to fetch patterns:', response.statusText);
    return [];
  }
}

export const getPattern = async ({id}: number) => {
  const response = await fetch(`${v1BaseUrl}/pattern/${id}`, { cache: 'no-store' });

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error('Failed to fetch pattern:', response.statusText);
    return [];
  }
}