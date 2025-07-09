import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamMember } from './team-member.interface';
import { Response } from 'express';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  getAll(): TeamMember[] {
    return this.teamService.getAll();
  }

  @Post()
  create(@Body() body: Omit<TeamMember, 'id'>): TeamMember {
    return this.teamService.add(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string, @Res() res: Response) {
    const deleted = this.teamService.delete(id);
    if (!deleted) {
      return res.status(404).json({ message: 'Member not found' });
    }
    return res.status(204).send();
  }
}
