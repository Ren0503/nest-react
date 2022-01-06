import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './user/user.resolver';
import { MessageResolver } from './message/message.resolver';
import { RepoModule } from './repo/repo.module';

@Module({
  imports: [RepoModule],
  controllers: [AppController],
  providers: [AppService, UserResolver, MessageResolver],
})
export class AppModule {}
