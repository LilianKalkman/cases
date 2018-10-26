class CD extends Media {
  constructor(title, artist, songs,){
    super(title);
    this.artist = artist;
    this.songs = songs;
  }

  getArtist(){
    return this.artist;
  }

  getSongs(){
    return this.songs;
  }

}
