const getSong =() =>{
    const searchSong = document.getElementById('searchBtn').value;
    const url = ` https://api.lyrics.ovh/suggest/${searchSong}`
    console.log(url);
}
