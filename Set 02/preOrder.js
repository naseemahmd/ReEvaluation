const preOrder = (node) => {
    let arr = new Array();
    if (node != null) {
        getPreOrder(node, arr);
        return arr;
    }
};

const getPreOrder = (node, arr) => {
    if (node != null) {
        arr.push(node.value);
        node.left && getPreOrder(node.left, arr);
        node.right && getPreOrder(node.right, arr);
    }
};

module.exports = {preOrder}