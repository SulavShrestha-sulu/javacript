let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= 100; i++) {
    console.log(i);

    if (i % 2 == 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Total Even Numbers: " + evenCount);
console.log("Total Odd Numbers: " + oddCount);