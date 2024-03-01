import { IsNumber, IsPositive } from 'class-validator';

export class FindUserDto {
  @IsNumber()
  @IsPositive()
  id: number;
}
