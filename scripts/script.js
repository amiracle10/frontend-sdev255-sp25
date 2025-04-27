// we are going to mkae an event listener.. it will trigger with the DOM is loaded (aka upon visting webpage)
addEventListener("DOMContentLoaded", async function(){
    const response = await this.fetch("https://inexpensive-classy-gallon.glitch.me/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs){
        let songID = song._id
        html+=`<li>${song.title} - ${song.artist} - <a href= "details.html?id=${songID}">Details</a> - <a href= "edit.html?id=${songID}">Edit Song</a></li>`
    }

    document.querySelector("#list_of_songs").innerHTML = html
})

//https://quintessential-petite-ghost.glitch.me/api/songs