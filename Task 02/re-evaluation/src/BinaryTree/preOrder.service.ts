import { Injectable } from '@nestjs/common';

@Injectable()
export class GetPreOrderService {
  value = [];
  preOrder(tree: any) {
    this.value = [];
    this.getPreOrder(tree);
    return this.value;
  }
  getPreOrder(tree: any) {
    this.value.push(tree.value);
    tree.right && this.getPreOrder(tree.left);
    tree.left && this.getPreOrder(tree.right);
  }
}
