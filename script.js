class Book{
    constructor(title, author, length, read)  {
        this.title = title;
        this.author = author;
        this.length = length;
        this.read = read;
    }
}


class Library {
    constructor(){
        this.myLibrary = [];
    }

    addBookToLibrary = (book = "unknown") => {
        this.myLibrary.push(book);
        console.log(book);
        this.addBookToDisplay(book);
    }

    removeBookFromLibrary = (book = "unknown") => {
        for(let i = 0; i < this.myLibrary.length; i++){
            if(this.myLibrary[i].title === book.title){
                this.myLibrary[i] = null;
            }
        }
    }

    addBookToDisplay = (book = "unknown") => {
        const libraryIndex = this.myLibrary.length - 1;
        const libraryDisplay = document.querySelector('.library');
        const bookDisplay = document.createElement('div');
        bookDisplay.classList.add('book-' + libraryIndex);
        
        // create relevant elements
        const title = document.createElement('div');
        const author = document.createElement('div');
        const length = document.createElement('div');
        const hasRead = document.createElement('button');

        // add classes and id for css
        title.classList.add('title');
        author.classList.add('author');
        length.classList.add('length');
        hasRead.id = 'has-read-btn';
        
        // different style selector for if read or not
        if(book.read){
            hasRead.classList.add('read');
        }else{
            hasRead.classList.add('not-read');
        }

        // add data related to book
        title.textContent = book.title;
        author.textContent = book.author;
        length.textContent = book.length + ' pages';

        // logic for read or not read book
        if(book.read){
            hasRead.textContent = 'Read';
        }else {
            hasRead.textContent = 'Not Read';
        }

        // add elements to book
        bookDisplay.appendChild(title);
        bookDisplay.appendChild(author);
        bookDisplay.appendChild(length);
        bookDisplay.appendChild(hasRead);
        libraryDisplay.appendChild(bookDisplay);
    }
}

let library = new Library();
let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '267', true);
let dune = new Book('Dune', 'Frank Herbert', '617', false);
let circe = new Book('Circe', 'Madeline Miller', '393', true);

library.addBookToLibrary(theHobbit);
library.addBookToLibrary(dune);
library.addBookToLibrary(circe);

console.log(library)


