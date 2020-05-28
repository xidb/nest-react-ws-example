import { Module } from '@nestjs/common';
import { StringGateway } from './string.gateway';

@Module({
  providers: [StringGateway],
})
export class StringModule {}
