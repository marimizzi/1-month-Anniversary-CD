java
const cd = document.getElementById("cd");
const song = document.getElementById("song");

cd.addEventListener("click", () => {

if(song.paused){
song.play();
cd.classList.add("spin");
}
else{
song.pause();
cd.classList.remove("spin");
}

});