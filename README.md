# HW-11-JS-Context

 что бы в консоль выводилось имя пользователя Vic вместо Vic2. Использовать нужно bind или call или apply.

var name = 'Vic 2';
var user = {
  age: 5,
  name: 'Vic',
  getName: function() {
    return this.name;
  }
};

const getName = user.getName;
console.log(getName())

//////////////////////////


что бы в консоль выводился Arni.



const user1 = {
  age: 5,
  name: 'Vic',
  getName: function() {
    return this.name;
  }
};
const user2 = {
  name: 'Arni',
}

const getName = user1.getName;
console.log(getName())