import React from 'react';
import { Company } from '../types'; // Ensure the import path is correct

interface CompanyCardProps {
  company: Company;
}

/**
 * Renders a single company card.
 * @param {CompanyCardProps} props - Props containing company data.
 * @returns {React.ReactElement} A styled card element displaying company details.
 */
const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg p-4 transition-shadow duration-300">
      <h2 className="text-lg font-bold text-gray-900">{company.name}</h2>
      <p className="text-gray-600">{company.address || "No address provided"}</p>
      <p className="text-sm text-gray-500">Contact: {company.contactEmail || "N/A"}</p>
    </div>
  );
};

export default CompanyCard;
