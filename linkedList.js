
function LinkedList(val){
    this.head = null;
}

function Node(val){
    this.node = val;
    this.next = null;
}

LinkedList.prototype.addNode = function(val){

    let next, currentNode;

    if(this.head === null){
        this.head = new Node(val);
    }else{
        currentNode = this.head;

        while(this.next){
            currentNode = this.next;
        }
        
        currentNode.next = new Node(val);
    }
    
}

LinkedList.prototype.removeNode = function(val){
    if(this.head.node === val){
        this.head = this.head.next;
    }


}


var list = new LinkedList();
list.addNode(3);
list.addNode(10);
list.addNode(9);

console.log(list);