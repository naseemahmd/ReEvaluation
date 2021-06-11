const {Tree} = require('./createATree')
let tree = new Tree();
for(var i = 0; i< 25;i++){
    var random = Math.floor(Math.random() * 40) + 1
    
    if(number.length == 0){
        number.push(random);
        console.log(random,"root");
        tree.newNode(random);
    }else{
        if(!number.includes(random)){
            number.push(random);
            console.log(random,"ss");
            tree.newNode(random);
        }
    }
    //tree.newNode(i);
}
// tree.newNode(30);
// tree.newNode(15);
// tree.newNode(60);
// tree.newNode(7);
// tree.newNode(22);
// tree.newNode(45);
// tree.newNode(75);
// tree.newNode(17);
// tree.newNode(27);

var value = []
function preOrder(tree) {
    value.push(tree.value)
    tree.right && preOrder(tree.left)
    tree.left && preOrder(tree.right)
   
    
}

preOrder(tree.treeRoot)

console.log(value);