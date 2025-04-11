// we are going to mkae an event listener.. it will trigger with the DOM is loaded (aka upon visting webpage)
addEventListener("DOMContentLoaded", async function(){
    const response = await this.fetch("http://localhost:3000/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        html+=`<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#addedsong").innerHTML = html
})