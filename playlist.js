/* playlist.js */

window.onload = init;

function init() {
    // Here we link the button from the html with JS;
    var button = document.getElementById("addButton");
    // Listens for when the button is clicked;
    button.onclick = handleButtonClick;

    loadPlaylist();  //This loads the saved songs from local storage
}

//When button clicked, do this;
function handleButtonClick(e) {
    //reference text input declared in HTML
    var textInput = document.getElementById("songTextInput");
    // add this text into a variable called songName
    var songName = textInput.value;
    //alert("Adding " + songName);

    //Alert user if text is empty
    if (songName == "") {
        alert("Please enter a song");
    }
    else {
        //alert("Adding " + songName);
        var li = document.createElement("li");
        li.innerHTML = songName;
        var ul = document.getElementById("playlist");
        ul.appendChild(li);

        // saves song
        save(songName);
    }
}