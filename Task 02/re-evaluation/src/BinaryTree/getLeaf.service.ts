import { Injectable } from '@nestjs/common';

import { Tree } from './tree.class';

@Injectable()
export class GetLeafService {
  leaf = [];

  getTheLeaf(tree: Tree): string[] {
    this.leaf = [];

    const depth = this.getTheDepth(tree);

    if (depth > 1) {
      return this.leaf;
    } else {
      throw new Error('Depth is not more 10');
    }
  }

  getTheDepth(tree: Tree): number {
    let count;
    if (!tree) {
      throw Error('No Tree is thre');
    } else {
      count = this.getLeafDepth(tree.treeRoot);
    }
    return count;
  }

  getLeafDepth(node): number {
    if (node == null) {
      return 0;
    } else {
      if (!node.right && !node.left) {
        this.leaf.push(node.value);
      }
      const rCount = this.getLeafDepth(node.right);
      const lCount = this.getLeafDepth(node.left);

      if (rCount > lCount) {
        return rCount + 1;
      } else {
        return lCount + 1;
      }
    }
  }
}
