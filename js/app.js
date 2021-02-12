const getSong = async() =>{
    const searchSong = document.getElementById('searchBtn').value;
    const url = ` https://api.lyrics.ovh/suggest/${searchSong}`
    toggleSpinner();
    const res = await fetch(url);
    const data = await res.json();
    displaySongs(data.data);
    toggleSpinner();

}

const displaySongs = songs =>{
    const songContainer = document.getElementById('songContainer');
    songContainer.innerHTML = '';
    songs.forEach(song => {
        console.log(song);
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3'
        songDiv.innerHTML= `
            <div class="col-md-9">
                <h3 class="lyrics-name">${song.title}</h3>
                 <p class="author lead">Album by <span>${song.artist.name}</span></p>
                 <img src="${song.artist.picture}">
                 <audio controls>
                    <source src="${song.preview}" type="audio/mpeg">
                 </audio>
            </div>
            <div class="col-md-3 text-md-right text-center">
                 <button onclick="getLyrics('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
            </div>
        `
        songContainer.appendChild(songDiv);
    });
}

const getLyrics = async(artist, title) =>{
    const url =`https://api.lyrics.ovh/v1/${artist}/${title}`;
    toggleSpinner()
    const res = await fetch(url);
    const data = await res.json();
    displayLyrics(data.lyrics);
    toggleSpinner()
}
const displayLyrics =  lyrics =>{
    const lyricsDiv = document.getElementById('getlyrics');
    lyricsDiv.innerText =lyrics;
}
///error message
// const displayError = error =>{
//     const errorTag = document.getElementById('errorMessage');
//     errorTag.innerText = error;
//};

// loading snipper
const toggleSpinner = () =>{
    const toggleSnip = document.getElementById('loadingSong');
    const toggleSong = document.getElementById('songContainer');
    const toggleLyrics = document.getElementById('getlyrics');
    toggleSnip.classList.toggle('d-none');
    toggleSong.classList.toggle('d-none');
    toggleLyrics.classList.toggle('d-none');
}
//key enter
document.getElementById('searchBtn')
.addEventListener('keypress', function(event){
    console.log(event.key);
    if(event.key == 'Enter'){
        document.getElementById('searchbtn2').click();
    }
})