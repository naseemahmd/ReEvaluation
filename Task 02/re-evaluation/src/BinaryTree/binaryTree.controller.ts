import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BinaryService } from './binaryTree.service';
import { GetLeafService } from './getLeaf.service';
import { GetPreOrderService } from './preOrder.service';

@Controller('binaryTree')
export class TreeController {
  constructor(
    private binaryService: BinaryService,
    private getLeafService: GetLeafService,
    private getPreOrderService: GetPreOrderService,
  ) {}

  @Get('/')
  getLeaf(@Query() query) {
    let tree = null;
    let leaf = null;
    tree = this.binaryService.createTree(query.tree);
    leaf = this.getLeafService.getTheLeaf(tree);
    return leaf;
  }
  @Get('/preOrder')
  getPreOrder(@Query() query) {
    let preOrder = null;
    let tree = null;
    tree = this.binaryService.createTree(query.tree);

    preOrder = this.getPreOrderService.preOrder(tree.treeRoot);

    return preOrder;
  }
}
