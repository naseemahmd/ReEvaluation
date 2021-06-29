// Print the leaf of binary Tree


function getTheDepth(tree) {
    if(tree == null){
        return 0
    }else{
        let rCount = getTheDepth(tree.right)
        let lCount = getTheDepth(tree.left)
        if(rCount >lCount ){
            return rCount + 1
        }else{      
            return lCount + 1
        }
        
    }

    
}   
let leaf = []
function getTheLeaf(tree){
    if(tree != null){
        if(!tree.right && !tree.left ){
            leaf.push(tree.value)
        }
        getTheLeaf(tree.right)
        getTheLeaf(tree.left)
           
    }
    return leaf
}

module.exports = {getTheDepth,getTheLeaf}


