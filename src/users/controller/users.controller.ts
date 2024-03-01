import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { FindUserDto } from '../dto/find-user.dto';
import { User } from '../entity/user.entity';

@Controller()
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get(':id')
  findUserById(@Param() dto: FindUserDto): Promise<User> {
    return this.service.findUserById(dto);
  }
}
