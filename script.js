const display = document.querySelector('.library');

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
    }

    removeBookFromLibrary = (book = "unknown") => {
        for(let i = 0; i < this.myLibrary.length; i++){
            if(this.myLibrary[i].title === book.title){
                this.myLibrary[i] = null;
            }
        }
    }
}

let library = new Library();
let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '267', 'read');
let dune = new Book('Dune', 'Frank Herbert', '617', 'not read');

library.addBookToLibrary(theHobbit);
library.addBookToLibrary(dune);

console.log(library);

function displayLibrary(){
    for(let i = 0; i < library.myLibrary.length; i++){
        const book = document.createElement('div');
        const bookInfo = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const length = document.createElement('div');
        const hasRead = document.createElement('div');
        title.classList.add('title');
        title.textContent = library.myLibrary[i].title;
        author.classList.add('author');
        author.textContent = library.myLibrary[i].author;
        length.classList.add('length');
        length.textContent = library.myLibrary[i].length;
        hasRead.classList.add('has-read');
        hasRead.textContent = library.myLibrary[i].read;
        book.classList.add('book' + '-' + i);
        bookInfo.appendChild(title);
        bookInfo.appendChild(author);
        bookInfo.appendChild(length);
        bookInfo.appendChild(hasRead);
        book.appendChild(bookInfo);
        display.appendChild(book);
    }

}

displayLibrary();

library.removeBookFromLibrary(dune);


