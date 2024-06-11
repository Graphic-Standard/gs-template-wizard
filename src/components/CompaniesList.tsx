// src/components/CompaniesList.tsx

import React from 'react';
import { useCompanies } from '../hooks/useCompanies';
import { useAuth } from '../hooks/useAuth';

const CompaniesList: React.FC = () => {
  const { token } = useAuth();
  const { data, isLoading, isError, error } = useCompanies(token);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      <h1>Companies</h1>
      <ul>
        {data?.map(company => (
          <li key={company.id}>{company.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompaniesList;
