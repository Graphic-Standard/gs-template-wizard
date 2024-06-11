// src/hooks/useCompanies.ts
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchCompanies } from '../api/fetchCompanies';
import { Company } from '../types';

/**
 * Custom hook for fetching companies using provided token.
 * @param {string | null} token - The authentication token required for the API call.
 * @returns {UseQueryResult<Company[], Error>} - The query object containing status and fetched data.
 */
export function useCompanies(token: string | null): UseQueryResult<Company[], Error> {
  return useQuery({
    queryKey: ['companies', token],
    queryFn: () => fetchCompanies(token),
    enabled: !!token  // Only run the query if token is not null
  });
}
