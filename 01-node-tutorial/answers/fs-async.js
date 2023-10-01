const { writeFile } = require('fs');
console.log("At the start");
writeFile('./temporary/output.txt', 'This is line 1: Hey, my name is Rodgers.\n',
    (err, result) => {
    console.log("At point 1")
    if (err) {
        console.log("This error happened: ", err);
    } else {
        writeFile('./temporary/output.txt', 'This is line 2: How are you doing today?\n', 
            { flag: 'a' },
            (err, result) => {
            console.log("At point 2")
            if (err) {
                console.log("This error happened: ", err);
            } else { 
                writeFile('./temporary/output.txt', 'This is line 3: Have a lovely day ahead\n', 
                    { flag: 'a' },
                    (err, result) => {
                    console.log("At point 3")
                    })
                }
            })
        }
})
    
console.log('at end');