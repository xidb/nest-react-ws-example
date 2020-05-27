import { Module } from '@nestjs/common';
import { StringModule } from './string/string.module';

@Module({
  imports: [StringModule],
})
export class AppModule {}
