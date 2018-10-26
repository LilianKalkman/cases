class Movies extends Media {
  constructor(title, director, runTime){
    super(title);
    this.director = director;
    this.runTime = runTime;
  }

  getDirector(){
    return this.director;
  }

  getRunTime(){
    return this.runTime;
  }

}
