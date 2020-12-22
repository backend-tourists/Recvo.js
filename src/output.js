const fs = require('fs');
const param = require("commander");

const lists = {
    netlify: {
        filename: '_redirects',
        data: '/* /index.html 200'
    }
}

param.parse(process.argv);
provider_name = param.args[0];
const setting = lists[provider_name];

if (!setting) {
    console.error("Please pass argument.");
    process.exit(1);
}

fs.writeFile('public/' + setting.filename, setting.data, function (err) {
    if (err) { throw err; }
    console.log('Success');
});

