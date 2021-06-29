const {Tree} = require('./createATree')
const {inOrder} = require('./inOrder')
const {reverseNumber} = require('./numberReverse')
const {preOrder} = require('./preOrder')
const {getTheDepth,getTheLeaf} = require('./printTheTreeLeaf')

let numbers =234556
const reverse = reverseNumber(numbers)
console.log(`Reverse of ${numbers} is ${reverse}`);



let tree = new Tree();
let number = []
for(let i = 0; i< 25;i++){
    
    const random = Math.floor(Math.random() * 40) + 1
    
    if(number.length == 0){
        number.push(random);
        tree.newNode(random);
    }else{
        if(!number.includes(random)){
            number.push(random);
            tree.newNode(random);
        }
    }
    
}
console.log("Created Tree with",number);
// print the Leaf
const count =  getTheDepth(tree.treeRoot)
if(count > 10){
    const leaf = getTheLeaf(tree.treeRoot)
    console.log("leaf is",leaf);
}else{
    console.log("try again");
}

//PreOrder
const preOrders = preOrder(tree.treeRoot)
console.log("Pre Order is ",preOrders);

//In Order
const inOrderTree = inOrder(tree)
console.log("InOrder is ",inOrderTree);