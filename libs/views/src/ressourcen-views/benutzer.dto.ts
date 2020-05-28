import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class BenutzerDto {
  id?: string;
  @ApiProperty()
  prename?: string;

  @ApiProperty()
  surname?: string;
  
  @ApiProperty()
  username: string;

  @ApiProperty()
  @IsEmail({require_tld: true})
  email: string;
}
