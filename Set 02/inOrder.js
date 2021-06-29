
function inOrder(tree) {
    const order = [];

    function getorder(node) {
        if(node !== null){     
            getorder(node.right);
            order.push(node.value);
            getorder(node.left);
        }
    }
    getorder(tree.treeRoot);

    return order;
}

module.exports = {inOrder} 