var Queue = function() {
 var instance = Object.create(queueMethods);
 instance.newNum = 0;
 instance.oldNum = 0;
 instance.storage = {};

 return instance;
 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
};

var queueMethods = {
enqueue: function(value){
 this.storage[this.oldNum]= value;
 this.oldNum++;
},
dequeue: function(){
 if(this.newNum <= this.oldNum){
   var value = this.storage[this.newNum];
   delete this.storage[this.newNum];
   this.newNum++;
   return value;
   }
 },
 size: function(){
   if(this.newNum - this.oldNum < 0){
   return this.oldNum - this.newNum;
 } else{
   return 0;
 }
}
};
