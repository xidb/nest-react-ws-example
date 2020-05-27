import { Injectable } from '@nestjs/common';
import { IStringReversed } from './interfaces/string-reversed.interface';
import { IStringToReverse } from './interfaces/string-to-reverse.interface';

@Injectable()
export class StringService {
  static reverseUnicodeString(string: IStringToReverse['string']): IStringReversed['string'] {
    return [...string].reverse().join('');
  }
}
