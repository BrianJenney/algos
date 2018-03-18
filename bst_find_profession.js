function findProfession(level, pos) {
    if(level == 1){
     return 'Engineer'  
    }
        
    if(level == 2){
      if(pos == 1){
         return 'Engineer' 
      }else{
        return 'Doctor'    
      }  
    }
    
    if(pos % 2 == 1){
        console.log('if');
        console.log('level', level-1)
        console.log('pos', (pos+1)/2);
        return findProfession(level - 1, (pos+1)/2)
    }
    else{
        console.log('else');
        console.log('level', level-1)
        console.log('pos', pos/2)
        if(findProfession(level - 1, pos/2) == 'Doctor'){
            return 'Engineer'
        }else{
            return 'Doctor'
        }
    }  
}


//in a binary tree - the next level up is half the size of the current level
//this is why in each recursion loop we essentially follow that leaf back up to
//its parent which will lead us to our base case
