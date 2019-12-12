$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }
  
  speak(){
   console.log(this.sound);
   
  }
}


const ernie = new Pet('dog', 1, 'pug', 'woof!');
const vera = new Pet('cat', 5, 'tabby', 'meow');

console.log(ernie);
ernie.speak();