import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GunController } from './gun/gun.controller';
import { GunService } from './gun/gun.service';

@Module({
  imports: [],
  controllers: [AppController,GunController],
  providers: [AppService,GunService],
})
export class AppModule {}
