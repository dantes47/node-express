const os = require('os');

// info about user:
const userInfo = os.userInfo();
// console.log(userInfo);

// info return the sysuptime in sec.
// const uptimeTime = os.uptime();
// console.log(`You're alive ${uptimeTime} sec.`);
// or:

// console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
};

// console.log(currentOS);

