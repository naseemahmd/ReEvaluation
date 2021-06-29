// Print the leaf of binary Tree
const {Tree} = require('./createATree')
let tree = new Tree();
var count =0
var leaf = []
function getTheDepth(tree) {
    if(tree === null){
    }else {
        count = getDepth(tree.treeRoot) 
}   



function getDepth(node) {

        if(node == null){

            return 0
        }else{
            if(!node.right && !node.left ){
                leaf.push(node.value)
            }
            var rCount = getDepth(node.right)
            var lCount = getDepth(node.left)
            if(rCount >lCount ){
                return rCount + 1
            }else{
                return lCount + 1
            }

        }
        
    }
}

var number = [] 

for(var i = 0; i< 45;i++){
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


getTheDepth(tree)
if(count <= 10){
    console.log(leaf);
}else{
    console.log("Depth Must be Grater then 10");
}



