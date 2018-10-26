class Book extends Media {
  constructor(title, author, pages){
    super(title);
    this.author = author;
    this.pages = pages;
  }

  getAuthor(){
    return this.author;
  }

  getPages(){
    return this.pages;
  }

}


const boek1 = new Book('Vegan Boek', 'Lisa', 100);
console.log(boek1);
boek1.toggleCheckOutStatus();
console.log(boek1);

boek1.addRating('9');
boek1.addRating('10');
boek1.addRating('9');
console.log(boek1.ratings);
console.log(boek1.getAverageRating());

// zorg dat je meer ratings aan de ratings prop kan toevoegen
// add a shuffle method op de CD class die een random liedje uitkiest en repeat
// fix de toggle 
