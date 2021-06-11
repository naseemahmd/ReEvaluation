class Node {
    constructor(value) {
        this.right = null;
        this.left = null;
        this.value = value;
    }
}
 
class Tree {
    constructor() {
        this.treeRoot = null;
    }
 
    newNode(value) {
        if (!this.treeRoot) {
            this.treeRoot = new Node(value);
        }
        else {
            this.nextNode(this.treeRoot, value);
        }
    }
 
    nextNode(node, value) {
        if (node.value < value) {
            if (!node.right) {
                node.right = new Node(value);
            }
            else {
                this.nextNode(node.right, value);
            }
        }
        else {
            if (!node.left) {
                node.left = new Node(value);
            }
            else {
                this.nextNode(node.left, value);
            }
        }
    }
}

module.exports = {Tree}

