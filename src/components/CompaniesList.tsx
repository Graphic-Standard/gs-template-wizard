import React from 'react';
import { useCompanies } from '../hooks/useCompanies';
import { useAuth } from '../hooks/useAuth';
import CompanyCard from './CompanyCard';
import { Company } from '../types'; // Make sure this path matches

/**
 * Component that renders a list of companies in a card layout.
 * Fetches company data using a custom hook and displays each as a card.
 * @returns {React.ReactElement} A grid of company cards or a loading/error message.
 */
const CompaniesList: React.FC = () => {
  const { token } = useAuth();
  const { data, isLoading, isError, error } = useCompanies(token);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error: {error?.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-center mb-8">Companies</h1>
      <div className="grid grid-cols-4 gap-4">
        {data?.map((company: Company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompaniesList;
