import { IsString } from 'class-validator';

export class StringToReverseDto {
  @IsString()
  readonly string: string;
}
