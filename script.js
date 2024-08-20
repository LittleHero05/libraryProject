const book1 = new Book('J.K. Rowling', 'Harry Potter and the Philosopher\'s Stone', 223, true);
const book2 = new Book('J.R.R. Tolkien', 'The Hobbit', 310, false);
const book3 = new Book('George Orwell', '1984', 328, true);
const book4 = new Book('Harper Lee', 'To Kill a Mockingbird', 281, false);

const myLibrary = [book1, book2, book3, book4];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary() {
    const author = document.querySelector('#book-author').value;
    const title = document.querySelector('#book-title').value;
    const pages = document.querySelector('#book-pages').value;
    const read = document.querySelector('#book-read').checked;

    console.log(author, title, pages, read);
}

document.querySelector('.newBook').addEventListener('click', addBookToLibrary);
