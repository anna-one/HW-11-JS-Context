
console.log('------#4')

let name = 'Vic 2';
let user = {
  age: 5,
  name: 'Vic',
  getName: function() {
    return this.name;
  }
};

const getName = user.getName.bind(user);
console.log(getName())



console.log('---------#5')

const user1 = {
    age: 5,
    name: 'Vic',
    getName2: function() {
      return this.name;
    }
  };
  const user2 = {
    name: 'Arni',
  }
  
  const getName2 = user1.getName2.bind(user2);
  console.log(getName2())