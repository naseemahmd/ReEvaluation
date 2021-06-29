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


function inOrder(tree) {
    var order = []

    function getorder(node) {
        if(node !== null){     
            getorder(node.right)
            order.push(node.value)
            getorder(node.left)
        }
    }
    console.log(tree.treeRoot);
    getorder(tree.treeRoot)

    console.log(order);
}

inOrder(tree)