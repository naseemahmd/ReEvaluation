
import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { BinaryService } from './binaryTree.service';
import {GetLeafService} from './getLeaf.service';
import {GetPreOrderService} from './preOrder.service'

@Controller('binaryTree')
export class TreeController {
  constructor(private binaryService: BinaryService , private getLeafService:GetLeafService, private getPreOrderService:GetPreOrderService) {}

  @Get('/')
    getLeaf(@Query() query){
        var tree = null
        var leaf = null
        tree = this.binaryService.createTree(query.tree)
        leaf = this.getLeafService.getTheLeaf(tree)
        // var preOrder = this.getPreOrderService.preOrder(tree.treeRoot)
        return leaf
    }
    @Get('/preOrder')
    getPreOrder(@Query() query){
        var preOrder = null
        var tree = null
       
        tree = this.binaryService.createTree(query.tree)
      
        preOrder = this.getPreOrderService.preOrder(tree.treeRoot)
        
        return preOrder
    }  

  
}


