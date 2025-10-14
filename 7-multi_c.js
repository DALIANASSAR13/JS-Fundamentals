
const x = Number(process.argv[2]);

if (!x || x < 1 || isNaN(x)) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;
    while (i < x) {
        console.log("C is fun");
        i++;
    }
}
