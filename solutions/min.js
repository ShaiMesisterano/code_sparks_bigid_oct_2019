Array.prototype.min =  function (){
    let min = undefined;
     for(let i=0;i<this.length;i++){
         if(!min || min>this[i])
            min = this[i];
         }
         return min;
    };
    

