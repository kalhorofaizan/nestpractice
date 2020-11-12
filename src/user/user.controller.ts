import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userservice: UserService) {}
  @Get()
  getUser(): { name: string } {
    return this.userservice.getUser();
  }
  @Get(':id')
  getsingleuser(@Param('id') id: number): any {
    return { name: 'faizan', id: id };
  }
}
