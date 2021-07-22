let candyOfTheDay = 'Strawberry Sucker';

let menu = ' Suckers, chocolate, pretty much anything';

let myOrder = '';
let myItems = prompt('What would you like today?');

myOrder = myItems;



let wantsABag =prompt('Would you like this in a bag?');

if(wantsABag === 'yes') {
    myOrder = myItems + ' in a bag!';
} else if (wantsABag === 'no') {
    myOrder = myItems + ' without a bag';
} else {
    myOrder = myItems;
}
   
   
//while loop
  function askUser() {
      let answer = prompt("Do you want a sucker or no sucker?");
      while(answer !== 'sucker'){
          answer=prompt('try again');
      }
      alert('Right away!')
  }

  askUser();