const getSong =() =>{
    const searchSong = document.getElementById('searchBtn').value;
    const url = ` https://api.lyrics.ovh/suggest/${searchSong}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}
