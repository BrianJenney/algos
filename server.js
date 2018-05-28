




function timer(func){
	setTimeout(()=>{
		return func;
	}, 3000)
};


function sayHi(){
	console.log('hi');
}

@timer
sayHi();
