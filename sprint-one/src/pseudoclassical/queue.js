var Queue = function() {
 this.newNum = 0;
 this.oldNum = 0;
 this.storage = {};

 // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 // but try not not reference your old code in writing the new style.
};

Queue.prototype.enqueue = function(value){
 this.storage[this.oldNum]= value;
 this.end++;
};
Queue.prototype.dequeue = function(){
 if(this.newNum <= this.oldNum){
   var value = this.storage[this.newNum];
   delete this.storage[this.newNum];
   this.newNum++;
   return value;
   }
 };
 Queue.prototype.size = function(){
   if(this.newNum - this.oldNum < 0){
   return this.oldNum  - this.newNum;
 } else{
   return 0;
}
}
