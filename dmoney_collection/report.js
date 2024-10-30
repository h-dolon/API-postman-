const newman = require('newman');
require('dotenv').config();

 
newman.run({
    collection:`https://api.postman.com/collections/23653239-9cef277c-158e-41d8-a122-272dec0ead38?access_key=${process.env.secratekey}`,

    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});