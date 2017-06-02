

function Library(name, creator, playlistName, tracks) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
  this.playlists.playlistName = playlistName;
  this.playlists.tracks = tracks;
}



var playlist = new Library( 'pepper', 'motherpepper', 'cats', 1 );

console.log(playlist);