let audioPlayer = undefined;

function start() {
    const config = {
        gui: {
            totalTime: { value: "0:00", DOMElement: document.querySelector(".totalTime")},
            currentTime: { value: "0:00", DOMElement: document.querySelector(".currentTime")},
            progressBar: { value: 0, DOMElement: document.querySelector(".progressBar")},
            songName: { value: "Mi Peor Error", DOMElement: document.querySelector(".songName")},
            artistName: { value: "Funky feat Marcela Gandara", DOMElement: document.querySelector(".artistName")},
        },
        buttons: {
            playPause: document.querySelector(".play"),
            volume: document.querySelector(".volume"),
        }
    };
    console.log(config);
    audioPlayer = new AudioPlayer(config);  
}