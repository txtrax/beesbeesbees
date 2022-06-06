var Bee = function() {
  // call the Grub superclass
  Grub.call(this);
  //don't hard code inside call
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// set the prototype
// set the constructor
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;