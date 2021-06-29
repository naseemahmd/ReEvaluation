import { Module } from '@nestjs/common';
import { TreeController } from './binaryTree.controller';
import { BinaryService } from './binaryTree.service';
import { GetLeafService } from './getLeaf.service';
import { Tree } from './tree.class';
import { GetPreOrderService } from './preOrder.service';

@Module({
  imports: [Tree],
  controllers: [TreeController],
  providers: [BinaryService, GetLeafService, GetPreOrderService, Tree],
})
export class TreeModule {}
