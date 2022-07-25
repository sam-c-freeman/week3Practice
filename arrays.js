console.log('testing link');

//while loops

let index = 0;
const max = 10;

while(index < max){
    console.log('in the while loop, index:', index);
    index++;
}
console.log('index after the while loop:', index);

//for loops

for(let i=0; i<max; i++ ){
    console.log ('in the for loop, i:', i);
}

let hand = ['Q', '3', 'J', '9', '6', 'K', 'A' ];

for(let i=0; i< hand.length; i++){
    console.log('for loop:', hand[i]);
    if(hand[i] === '9'){
        console.log('match');
    }
}

//for in

for(i in hand){
    console.log(' for in loop:', hand[i]);
    if(hand[i] === '9'){
        console.log('match!!!');
    } //end match
} //end for in loop

//for of

for(card of hand){
    console.log('for of loop:', card);
    if(card === '9'){
        console.log('match!!!!');
    }
}