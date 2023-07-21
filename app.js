//Get elments from the DOM

const artistInput = document.querySelector('#artistName');
const songInput = document.querySelector('#songName');
const form = document.querySelector('#lyricsForm');
const output = document.querySelector('.lyrics-output pre');
const btn = document.querySelector('.fetchBtn');
const loading = document.querySelector('.loading');

//Add a click event to the button
btn.addEventListener('click', () => {
    if(artistInput.value !== "" && songInput.value !== "" ) {
        loading.style.opacity = "1";
        fetch(
            `https://api.lyrics.ovh/v1/
            ${artistInput.value}/${songInput.value}`
        )
        .then(response => response.json())
        .then(data => {
            if(data.lyrics !== undefined) {
                output.innerHTML = data.lyrics;
            } else {
                output.innerHTML = `No lyrics found to this data`;
            }
            loading.style.opacity ="0";
            document.querySelector('lyrics-output').style.opacity = "1";
        });
    }
})