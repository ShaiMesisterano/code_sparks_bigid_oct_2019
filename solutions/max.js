Array.prototype.max =  function (){
    let max = undefined;
     for(let i=0;i<this.length;i++){
         if(!max || max<this[i])
            max = this[i];
         }
         return max;
    };
    

