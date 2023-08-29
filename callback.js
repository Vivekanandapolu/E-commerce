function funcCallback(callback) {
    let name = "vivek"
    callback(name);
}

function calledCallback(val) {
    console.log(val);
}
funcCallback(calledCallback)