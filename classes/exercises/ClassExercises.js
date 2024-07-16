// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, checkoutAmount, discarded){
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.checkoutAmount = checkoutAmount;
        this.discarded = discarded;
    }

    checkout(uses=1) {
        this.checkoutAmount += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, checkoutAmount, discarded){
        super(title, author, copyright, isbn, pages, checkoutAmount, discarded);
    }

    discard(currentYear){
        if (currentYear-this.copyright > 5) {
            this.discarded = "Yes";
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, checkoutAmount, discarded){
        super(title, author, copyright, isbn, pages, checkoutAmount, discarded);
    }

    discard(){
        if (this.checkoutAmount > 100) {
            this.discarded = "Yes";
        }
    }
}


// Declare the objects for exercises 2 and 3 here:

let classicNovel = new Novel ("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");

let secretManual = new Manual ("Top Secret Shuttle Building Manual", "Redacted", 2013, 0000000000000, 1147, 1, "No");

// Code exercises 4 & 5 here:

console.log(secretManual.discarded)
secretManual.discard(2023)
console.log(secretManual.discarded)

classicNovel.checkout(5)
console.log(classicNovel.checkoutAmount)
classicNovel.discard()
console.log(classicNovel.discarded)