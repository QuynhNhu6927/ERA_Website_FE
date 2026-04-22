export interface User {
  id: string;
  staffCode: string;
  fullName: string;
  name?: string;
  email: string;
  personalEmail: string | null;
  avatar: string | null;
  isActive: boolean;
  roleId: number;
  role?: {
    id: number;
    name: string;
    description: string | null;
  };
}
