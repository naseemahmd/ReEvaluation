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
// tree.newNode(8);
// tree.newNode(11);
// tree.newNode(10);
// tree.newNode(15);
// tree.newNode(14);
// tree.newNode(19);
// tree.newNode(21);
// tree.newNode(23);

function inOrder(tree) {
    var order = []

    function getorder(node) {
        if(node !== null){
            console.log(node,"SS");
        
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