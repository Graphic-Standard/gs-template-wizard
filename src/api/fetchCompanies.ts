// src/api/fetchCompanies.ts
import { Company } from "../types";

/**
 * Fetches the list of companies from the API.
 * @param {string | null} token - The authentication token, can be null.
 * @returns {Promise<Company[]>} A promise that resolves to an array of company objects.
 * If the token is null, returns an empty array or throws an error, based on your handling preference.
 */
export async function fetchCompanies(token: string | null): Promise<Company[]> {
  if (!token) {
    // No valid token, so return empty array or throw an error.
    return [];  // or throw new Error("Authentication token is required.");
  }

  const response = await fetch(`${import.meta.env.VITE_APP_CORE_API_URL}/companies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch companies');
  }

  const data = await response.json();
  return data.items;
}
