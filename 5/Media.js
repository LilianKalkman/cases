class Media {
  constructor(title){
    this.title = title;
    this.isCheckedout = false;
    this.ratings = [];
  }


  getTitle(){
    return this.title;
  }

  getIsCheckedOut(){
    return this.isCheckedOut;
  }

  getRatings(){
    return this.ratings;
  }


  getAverageRating(){
    var total = this.ratings.reduce(total, rating => {
      return total + rating;
    }, 0);
    return total / this.ratings.length;
  }

  toggleCheckOutStatus(){
    this.isCheckedOut = this.isCheckedOut ? false : true;
  }

  addRating(newRating){
    this.ratings.push(newRating);
  }


}
