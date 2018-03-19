
function Block(time, data, previous=null){
	this.time = time;
	this.data = data;
	this.hash = createHash();
	this.previous = previous;
	
	function createHash(){
		return (Math.random() * 1000).toString();
	}
}

function BlockChain(){
	this.blockChain = [createInitialBlock()]

	function createInitialBlock(){
		return new Block(new Date().getTime(), 'data', null); 
	}

	this.addBlock = function(block){
		block.previous = this.getLastBlock().hash;
		this.blockChain.push(block);
	}

	this.getLastBlock = function(){
		return this.blockChain[this.blockChain.length - 1]
	}

	this.isValidBlock = function(){
		for(let i=0; i<this.blockChain.length; i++){
			let prevBlock, curBlock;

			nextBlock = this.blockChain[i + 1];
			curBlock = this.blockChain[i];

			return nextBlock.previous == curBlock.hash;
		}
	}
}

var bc = new BlockChain();

bc.addBlock(new Block(new Date().getTime(), 'more data'));
bc.addBlock(new Block(new Date().getTime(), 'yet more data'));

console.log(bc.blockChain);
console.log(bc.isValidBlock());
