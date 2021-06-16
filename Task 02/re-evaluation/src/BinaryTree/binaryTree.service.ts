import { Injectable } from '@nestjs/common';
import {Node} from './node.class'
import {Tree} from './tree.class'

@Injectable()
export class BinaryService {

    constructor(private tree:Tree){
       
    }
    
    createTree(value:string):Tree{
        this.tree = {} as any

        var treeValues = value.split(',')
        for(var i = 0;i< treeValues.length;i++){
            
            if (!this.tree.treeRoot) {
                this.tree.treeRoot = new Node(parseInt(treeValues[i]));     
            }
            else {
                this.nextNode(this.tree.treeRoot, parseInt(treeValues[i]));
            }
        }
       
        return this.tree
    }

    nextNode(root,value){
        if (root.value < value) {
            if (!root.right) {
                root.right = new Node(parseInt(value));
            }
            else {
                this.nextNode(root.right, parseInt(value));
            }
        }
        else {
            if (!root.left) {
                root.left = new Node(parseInt(value));
            }
            else {
                this.nextNode(root.left, parseInt(value));
            }
        }
    }

    

}