const display = document.querySelector('.library');
let myLibrary = [];

class Book{
    constructor(title, author, length, read)  {
        this.title = title;
        this.author = author;
        this.length = length;
        this.read = read;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}




let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '267', 'read');
let dune = new Book('Dune', 'Frank Herbert', '617', 'not read');

addBookToLibrary(theHobbit);
addBookToLibrary(dune);

console.log(myLibrary);

function displayLibrary(){
    for(let i = 0; i < myLibrary.length; i++){
        const book = document.createElement('div');
        const bookInfo = document.createElement('div');
        const title = document.createElement('div');
        const author = document.createElement('div');
        const length = document.createElement('div');
        const hasRead = document.createElement('div');
        title.classList.add('title');
        title.textContent = myLibrary[i].title;
        author.classList.add('author');
        author.textContent = myLibrary[i].author;
        length.classList.add('length');
        length.textContent = myLibrary[i].length;
        hasRead.classList.add('has-read');
        hasRead.textContent = myLibrary[i].read;
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