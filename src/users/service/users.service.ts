import { Injectable } from '@nestjs/common';
import { FindUserDto } from '../dto/find-user.dto';
import { User } from '../entity/user.entity';

@Injectable()
export class UsersService {
  findUserById(dto: FindUserDto): Promise<User> {
    return Promise.resolve({
      name: `User ${dto.id}`,
    });
  }
}
