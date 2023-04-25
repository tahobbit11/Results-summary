fetch("./data.json")
.then(response => response.json())
.then(data => {
    //console.log(data)
    //console.log(data[0].category)
    //console.log(data[0].score)
    //console.log(data[0]['category'])
    document.querySelector("#reaction").innerHTML = data[0]['category']
    document.querySelector("#reaction-score").innerText = data[0]['score']
    document.querySelector("#memory").innerHTML = data[1]['category']
    document.querySelector("#memory-score").innerText = data[1]['score']
    document.querySelector("#verbal").innerHTML = data[2]['category']
    document.querySelector("#verbal-score").innerText = data[2]['score']
    document.querySelector("#visual").innerHTML = data[3]['category']
    document.querySelector("#visual-score").innerText = data[3]['score']
});