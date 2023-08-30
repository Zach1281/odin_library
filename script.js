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
        this.checkBookIsInLibrary(book);
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
        const deleteBtn = document.createElement('button');

        // add classes and id for css
        bookDisplay.dataset.title = book.title;
        bookDisplay.dataset.author = book.author;
        title.classList.add('title');
        author.classList.add('author');
        length.classList.add('length');
        deleteBtn.classList.add('delete');
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
        deleteBtn.textContent = 'Delete';

        // add event listeners
        
        deleteBtn.addEventListener('click', (event) => {
            const book = event.currentTarget.parentNode;
            console.log(book);
            book.remove(book);
        });

        hasRead.addEventListener('click', () => {
            if(hasRead.classList.contains('read')){
                hasRead.classList.remove('read');
                hasRead.classList.add('not-read');
                hasRead.textContent = 'Not Read';
            }else{
                hasRead.classList.remove('not-read');
                hasRead.classList.add('read');
                hasRead.textContent = 'Read';
            }
        })

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
        bookDisplay.appendChild(deleteBtn);
        libraryDisplay.appendChild(bookDisplay);
    }

    checkBookIsInLibrary = (book = "unknown") => {
        // this is an example of a place to think about a search algorithm and maybe also retrospectively
        // think about what data structure you have decided to put your information into!
        if(this.myLibrary.length === 0){
            return false;
        }
        for(let i = 0; i < this.myLibrary.length; i++){
            if(this.myLibrary[i].title === book.title && this.myLibrary[i].title === book.author){
                console.log(book + "is in library");
                return true;
            }
        }
        return false;
    }
}

let library = new Library();
let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '267', true);
let dune = new Book('Dune', 'Frank Herbert', '617', false);
let circe = new Book('Circe', 'Madeline Miller', '393', true);

library.addBookToLibrary(theHobbit);
library.addBookToLibrary(dune);
library.addBookToLibrary(circe);

const addBook = document.getElementById('add-book-btn');
const addBookDialog = document.getElementById('add-book');
const confirmBookDialog = document.getElementById('confirmBtn');
const cancelBookDialog = document.getElementById('cancel');
const deleteBook = document.querySelector('.delete');

addBook.addEventListener('click', () => {
    addBookDialog.showModal();
});

confirmBookDialog.addEventListener('click', () => {
    const addTitle = document.getElementById('title');
    const addAuthor = document.getElementById('author');
    const addLength = document.getElementById('length');
    const addHasRead = document.getElementById('hasRead');
    let newBook = new Book(addTitle.value, addAuthor.value, addLength.value, addHasRead.checked);
    if(library.checkBookIsInLibrary(newBook)){
        // send an error to the dialog box and don't let it into the library
        return;
    }

    library.addBookToLibrary(newBook);
    addTitle.value = "";
    addAuthor.value = "";
    addLength.value = "";
    addHasRead.checked = false;
});

confirmBookDialog.addEventListener('click', (event) => {
    event.preventDefault();
    addBookDialog.close()
});

cancelBookDialog.addEventListener('click', () => {
    const addTitle = document.getElementById('title');
    const addAuthor = document.getElementById('author');
    const addLength = document.getElementById('length');
    const addHasRead = document.getElementById('hasRead');
    addTitle.value = "";
    addAuthor.value = "";
    addLength.value = "";
    addHasRead.checked = false;
});


