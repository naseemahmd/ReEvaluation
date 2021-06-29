import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ReverseModule } from './Reverse/reverse.module';
import { TreeModule } from './BinaryTree/binaryTree.module';

@Module({
  imports: [ReverseModule, TreeModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
