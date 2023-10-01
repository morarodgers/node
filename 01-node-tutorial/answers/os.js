const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user)

// info about the available processors
const processors = os.cpus()
console.log(processors)

// info about the hostname
console.log(os.hostname())

// info about the machine
const device = os.machine()
console.log(device)

// Return system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)