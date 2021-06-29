import { Injectable } from '@nestjs/common';

@Injectable()
export class Node {
  value: any;
  right: any;
  left: any;
  public constructor(value: any) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}
