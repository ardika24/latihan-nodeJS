const os = require('os');
const fs = require('fs');

function createInfoOS(data) {
    fs.writeFileSync("./baru.json",
    JSON.stringify(data));
}

createInfoOS({
    user :  os.userInfo(),
    memory: os.totalmem(),
});