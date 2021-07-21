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


document.write('You want: ' + myOrder)