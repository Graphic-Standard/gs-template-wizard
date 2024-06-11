// src/types/index.ts
export interface Company {
    account: string;
    active: boolean;
    address: string | null;
    contactEmail: string | null;
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
  