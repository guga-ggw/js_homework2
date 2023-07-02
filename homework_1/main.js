const people = [
    { name: 'Temo', age: 25 },
    { name: 'Lasha', age: 21 },
    { name: 'Ana', age: 28 }
  ];

  let lowestage = 200
  let human 
  people.forEach((user) =>{
    if(lowestage > user.age ){
        lowestage = user.age
        return human = user
    }
  } )

  console.log(`${human.name} არის ${lowestage} წლის და ყველაზე უმცროსი სხვებთან შედარებით
   `)