import { ROLE } from './role.enum';

export interface TeamMember {
  id: string;
  fullName: string;
  role: ROLE;
  email: string;
  phoneNumber: string;
  birthDate: string;
  hiringDate: string;
  dismissalDate: string | null;
}
