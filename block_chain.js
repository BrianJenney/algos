
function Block(time, data, previous=null){
	
	this.time = time;
	this.data = data;
	this.previous = previous;

}

function BlockChain(){
	this.blockChain = [createInitialBlock()]

	function createInitialBlock(){
		return new Block(new Date().getTime(), 'data', null); 
	}

	this.addBlock = function(block){
		block.previous = this.getLastBlock();
		this.blockChain.push(block);
	}

	this.getLastBlock = function(){
		return this.blockChain[this.blockChain.length - 1]
	}
}

var bc = new BlockChain();

bc.addBlock(new Block(new Date().getTime(), 'more data'));

console.log(bc.blockChain);
