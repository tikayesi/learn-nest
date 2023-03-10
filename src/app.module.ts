import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Biodata } from './biodata/Biodata';
import { BiodataController } from './biodata/BiodataController';
import { BiodataRepository } from './biodata/BiodataRepository';
import { BiodataService } from './biodata/BiodataService';
import { DatabaseModule } from './database.module';

@Module({
  imports: [TypeOrmModule.forFeature([Biodata, BiodataRepository]), DatabaseModule],
  controllers: [AppController, BiodataController],
  providers: [AppService, BiodataService],
})
export class AppModule {}
