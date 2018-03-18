

function BST(value){
    this.value = value;
    this.right = null;
    this.left = null;
};

BST.prototype.insert = function(value){
    if(value > this.value){
        if(!this.right){
            this.right = new BST(value)
        }else{
            this.right.insert(value)
        }
    }else{
        if(!this.left){
            this.left = new BST(value)
        }else{
            this.left.insert(value)
        }
    }
}

mytree = new BST(1);

mytree.insert(5);
mytree.insert(10);
mytree.insert(15);
mytree.insert(2);
mytree.insert(4);
mytree.insert(9);

console.log(mytree)
