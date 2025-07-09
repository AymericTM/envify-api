import { Injectable } from '@nestjs/common';
import { TeamMember } from './team-member.interface';
import { ROLE } from './role.enum';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TeamService {
  private teamMembers: TeamMember[] = [
    {
      id: '1',
      fullName: 'Alice Johnson',
      role: ROLE.FRONTEND_DEV,
      email: 'alice@example.com',
      phoneNumber: '+1-202-555-0193',
      birthDate: '1997-03-12',
      hiringDate: '2023-01-15',
      dismissalDate: null,
    },
    {
      id: '2',
      fullName: 'Bob Smith',
      role: ROLE.BACKEND_DEV,
      email: 'bob@example.com',
      phoneNumber: '+1-202-555-0147',
      birthDate: '1987-08-03',
      hiringDate: '2022-07-01',
      dismissalDate: '2024-03-10',
    },
  ];

  getAll(): TeamMember[] {
    return this.teamMembers;
  }

  add(memberData: Omit<TeamMember, 'id'>): TeamMember {
    const newMember: TeamMember = {
      id: uuid(),
      ...memberData,
    };
    this.teamMembers.push(newMember);
    return newMember;
  }

  delete(id: string): boolean {
    const index = this.teamMembers.findIndex((m) => m.id === id);
    if (index === -1) return false;
    this.teamMembers.splice(index, 1);
    return true;
  }
}
