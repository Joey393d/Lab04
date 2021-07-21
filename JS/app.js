let CandyOfTheDay = 'Strawberry Sucker';

let menu = ' Suckers, chocolate, pretty much anything';

let myOrder = '';
let myItems = prompt('What would you like today?');

myOrder = myItems;



let WantsABag =prompt('Would you like this in a bag?');

if(WantsABag !== 'yes') {
    myOrder = myItems + ' in a bag!'
} else if (WantsABag === 'no') {
    myOrder = myItems + ' without a bag';
} else {
    myOrder = myItems;
}


document.write('You want: ' + myOrder)