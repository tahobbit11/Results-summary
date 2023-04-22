fetch("./data.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data[0].category)
    console.log(data[0].score)
    console.log(data[0]['category'])
    document.querySelector("#reaction").innerHTML = data[0]
});