import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RepoService } from './repo.service';
import Message from 'src/db/models/message.entity';
import User from 'src/db/models/user.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Message])],
  providers: [RepoService],
  exports: [RepoService],
})

export class RepoModule {}
