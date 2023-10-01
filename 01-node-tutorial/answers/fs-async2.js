const { readFile, writeFile } = require('fs');
console.log('start')
readFile('./content/first.txt', 'utf8', (err,result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result;
        readFile('./content/third.txt', 'utf8', (err,result) => {
            if (err) {
                console.log(err)
                return
            }
            const third = result;
            writeFile(
                //'./content/result-async.txt',
                './temporary/fileB.txt',
                `First line : ${first}\n`, 
                (err, result) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('Done first')
                }
            )
            writeFile(
                './temporary/fileB.txt',
                `Second line : ${second}\n`,
                { flag: 'a' },
                (err, result) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('Done second')
                }
            )
            writeFile(
                './temporary/fileB.txt',
                `Third line : ${third}\n`,
                { flag: 'a' },
                (err, result) => {
                    if (err) {
                        console.log(err)
                        return
                    }
                    console.log('Done third')
                }
            )
        })
    })
})
console.log('Moving on to the next task')