// src/types/index.ts
export interface Company {
  account: string;
  active: boolean;
  address?: string;
  contactEmail?: string;
  contactPhone: string | null;
  createTime: string;
  id: string;
  internalNote: string | null;
  name: string;
  objectType: string;
  regNo: string | null;
  structType: string;
  user: string;
  valid: boolean;
  vatId: string | null;
}

// Define the structure for the company data.
export interface Company {
  id: string;
  name: string;
  address?: string;
  contactEmail?: string;
}

