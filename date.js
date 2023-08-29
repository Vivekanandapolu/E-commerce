function dates() {
    const date = new Date();
    console.log(date.toLocaleString().split(' ')[1]);
}
setInterval(dates, 1000)