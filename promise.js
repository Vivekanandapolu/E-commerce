import fetch from 'node-fetch'

let url = "https://jsonplaceholder.typicode.com/photos"

let getPosts = new Promise((resolve, reject) => {
    fetch(url).then((result) => {
        let data = result.json()
        resolve(data)
    })
})
getPosts.then((res) => {
    let arr = []
    res.filter(data => {
        if (!arr.includes(data)) {
            arr = [data]
        }
    })

}).finally(() => {
    console.log("Allways Execute this block");
})