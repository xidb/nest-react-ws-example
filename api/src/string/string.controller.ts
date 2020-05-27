import { Controller, Body, Post } from '@nestjs/common';
import { StringToReverseDto } from './dto/string-to-reverse.dto';
import { IStringReversed } from './interfaces/string-reversed.interface';
import { StringService } from './string.service';

@Controller('string')
export class StringController {
  @Post('reverse')
  async reverse(@Body() { string }: StringToReverseDto): Promise<IStringReversed['string']> {
    return StringService.reverseUnicodeString(string);
  }
}
