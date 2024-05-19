 async function getComments() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await res.json()
    console.log("comments", data);
    for(let el of data){
        document.querySelector("tbody").innerHTML += `<tr><td class="text-center fw-bold fs-4  ">${el.id}</td><td class="text-center fs-4 ">${el.name}</td><td class="text-center fs-4 ">${el.email}</td><td class="text-center fs-4 ">${el.body}</td></tr>`
        
        // document.querySelector(".row1").innerHTML += `<div class="col-md-3 border"><h3>${el.id}</h3></div>
        // <div class="col-md-3 border"><h3>${el.name}</h3></div>
        // <div class="col-md-3 border"><h3>${el.email}</h3></div>
        // <div class="col-md-3 border"><h3>${el.body}</h3></div> `
        }
}
getComments() 