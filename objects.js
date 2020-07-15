var playlist = {
  "Billy Joel" : "Piano Man"
}
function updatePlaylist(playlist, artistName, songTitle) {return playlist[artistName] = songTitle;}
function removeFromPlaylist(playlist, artistName) {if(delete playlist[artistName]) {return playlist;}}
