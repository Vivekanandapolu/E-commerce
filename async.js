import fetch from "node-fetch";

let api = "https://jsonplaceholder.typicode.com/albums"


let apiData = new Promise((resolve, reject) => {
    fetch(api).then((res => {
        let data = res.json()
        if (data) {
            resolve(data)
        }
        else {
            reject("No Data Found in the URL")
        }
    }))
})

// async function func() {

//     //Wait for the promise response and print the second message in the console.log()

//     let result = await apiData
//     //First
//     console.log(result);
//     //Second
//     console.log("Second Msg");
// }
// func()
apiData.then((res) => {
    let arr = []
    res.filter((data) => {
        if (data.id == Math.floor(Math.random() * 10)) {
            arr = data
        }

    })
    console.log(arr);
});