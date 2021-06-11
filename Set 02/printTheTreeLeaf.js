// Print the leaf of binary Tree
const {Tree} = require('./createATree')
let tree = new Tree();
var count =0
var leaf = []
function getTheDepth(tree) {
    console.log(tree, "tree");
    console.log(tree.treeRoot,"sss");
    if(tree === null){
        console.log("Tree depth must be 10");    
    }else {
        count = getDepth(tree.treeRoot) 
        //getDepth(tree.left)
        // if(tree.treeRoot.right){
        //     countRight += 1 
        //     depRight(tree.treeRoot.right)
        // }
        // if(tree.treeRoot.left){
        //     countLeft += 1 
        //     depLeft(tree.treeRoot.left)
        // }
        // var rightNode = printAll(tree.right);
        // var leftNode = printAll(tree.left)
        // if(leftNode > rightNode){
        //     count += 1
        // }
}   



function getDepth(node) {

        console.log(node,"Right");
        
        // if(rightNode.right !== null && rightNode.left !== null){
        //     countRightR += 1 
        //     countRightL += 1 
            
        //     depRight(rightNode.right)
        //     depRight(rightNode.left)
        // }else if(rightNode.right !== null || rightNode.left !== null){
            
        //     if(rightNode.right !== null){
        //         countRightR += 1
        //         depRight(rightNode.right)
        //     }
        //     if(rightNode.left !== null){
        //         countRightL += 1
        //         depRight(rightNode.left)
        //     }
        // }
        if(node == null){

            return 0
        }else{
            if(!node.right && !node.left ){
                leaf.push(node.value)
            }
            var rCount = getDepth(node.right)
            var lCount = getDepth(node.left)
            console.log(lCount,"L",rCount,"R");
            if(rCount >lCount ){
                return rCount + 1
            }else{
                return lCount + 1
            }

        }
        
    
}


//function depLeft(leftNode) {
//         console.log(leftNode,"left");

        
//         if(leftNode.right !== null && leftNode.left !== null){
//             countLeft += 1
//             depLeft(leftNode.right)
//             depLeft(leftNode.left)
//         }else if(leftNode.right !== null || leftNode.left !== null){
//             countLeft += 1
//             if(leftNode.right !== null){
                
//                 depLeft(leftNode.right)
                
//             }
//             if(leftNode.left !== null){
                
//                 console.log(leftNode.left);
//                 depLeft(leftNode.left)
//             }
//         }
//     }
   
    // console.log(countRight);
    // console.log(countLeft);

    //console.log(tree, "Insoed");
}


var number = [] 

for(var i = 0; i< 45;i++){
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

// // tree.newNode(30);
// tree.newNode(15);
// tree.newNode(60);
// tree.newNode(7);
// tree.newNode(22);
// tree.newNode(45);
// tree.newNode(75);
// tree.newNode(17);
// tree.newNode(27);

getTheDepth(tree)
console.log(count,"count");
if(count <= 10){
    console.log(leaf);
}else{
    console.log("Depth Must be Grater then 10");
}



