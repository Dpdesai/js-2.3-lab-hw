let score = 50; // 80 75 65 


// Write an if/else statement for the following requirements:
if (score >= 80) {
    console.log("You did a good job");
} else if (score >= 70) {
    console.log("Keep trying");
} else if (score >= 60) {
    console.log("ehhhh");
} else if (score >= 55) {
    console.log("Not to good");
} else {
    console.log("Bad Grade But You'll Get Em Next Time");
}

let odd = [];
let even = [];

// Write a for loop for the given output
for( let i=1; i<=10; i++) {
    if(i % 2 !== 0){
        odd.push(i*10);
    }
    if(i % 2 == 0){
        even.push(i*10);
    }
}

console.log(odd);
console.log(even);