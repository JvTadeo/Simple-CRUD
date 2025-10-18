function timeStamp() {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}


function info(message: string) {
    console.log(`\x1b[1m\x1b[36m[INFO]\x1b[0m ${timeStamp()} - ${message}`);
}

function error(message: string) {
    console.log(`\x1b[1m\x1b[31m[ERROR]\x1b[0m ${timeStamp()} - ${message}`);
}

function success(message: string) {
    console.log(`\x1b[1m\x1b[32m[SUCCESS]\x1b[0m ${timeStamp()} - ${message}`);
}

export const customLogger = { info, error, success };