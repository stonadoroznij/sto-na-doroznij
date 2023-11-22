type requestType = {
  id: number;
  name: string;
  phoneNumber: string;
  email?: string | null;
  message?: string | null;
  carBrand?: string | null;
  carModel?: string | null;
  carYear?: string | null;
  vinCode?: string | null;
};

export type { requestType };
