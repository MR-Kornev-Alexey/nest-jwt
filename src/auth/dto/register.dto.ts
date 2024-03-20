import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class RegisterDto {

  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  // Включаем дополнительные поля из Prisma.usersCreateInput
  // Можно скопировать их вручную или автоматически сгенерировать при помощи инструментов
  // Например:
  // @ApiProperty()
  // @IsNotEmpty()
  // prismaField: string;
}
