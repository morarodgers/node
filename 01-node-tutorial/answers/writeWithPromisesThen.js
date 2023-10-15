const { writeFile, readFile } = require('fs').promises;

// Writing to the file
writeFile('newFile.txt','Hello\n') //write line 1
  .then(() => {
    console.log("First line done")
    return writeFile('newFile.txt', 'Hope all is well\n', { flag: 'a' }); //write line 2
  })
  .then(() => {
    console.log("Second line done")
    return writeFile('newFile.txt', 'Wishing you a lovely day ahead\n', { flag: 'a' }); //write line 3
  })
  .then(() => {
    console.log("Third line done, now reading file")
    return readFile('newFile.txt', 'utf8'); // Reading the file
  })
  .then(data => {
    console.log('The contents are:\n', data); // Logging the data to the screen
  })
  .catch(error => {
    console.log("An error occurred: ", error);
  });