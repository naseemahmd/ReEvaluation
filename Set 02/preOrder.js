const {Tree} = require('./createATree')
let tree = new Tree();
for(var i = 0; i< 25;i++){
    var random = Math.floor(Math.random() * 40) + 1
    
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


var value = []
function preOrder(tree) {
    value.push(tree.value)
    tree.right && preOrder(tree.left)
    tree.left && preOrder(tree.right)
   
    
}

preOrder(tree.treeRoot)

console.log(value);