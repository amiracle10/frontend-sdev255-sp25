addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addBtn").addEventListener("click", addSong);
});

//add song to db... must be async

async function addSong() {
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        releaseDate: document.querySelector("#released").value,
        popularity: document.querySelector("#popularity").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : [],
        username : localStorage.getItem("uname")
    }

    const response = await fetch("https://cut-laser-humor.glitch.me/api/songs",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(song)
    });
    
    if(response.ok){
        const results = await response.json()
        alert("Added Song with ID of: " + results._id)

        // reset form after adding
        document.querySelector("form").reset();
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot add song"
    }
};