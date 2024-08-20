// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Get the modal, modal button, close button, and overlay elements
    const openModalButton = document.querySelector('[data-modal-target]');
    const closeModalButton = document.querySelector('[data-close-button]');
    const overlay = document.getElementById('overlay');
    const modal = document.querySelector('.bookPopForm');

    // Function to open the modal
    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        overlay.classList.add('active');
    }

    // Function to close the modal
    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Event listener for the open modal button
    openModalButton.addEventListener('click', () => {
        openModal(modal);
    });

    // Event listener for the close modal button
    closeModalButton.addEventListener('click', () => {
        closeModal(modal);
    });

    // Event listener for the overlay to close the modal
    overlay.addEventListener('click', () => {
        closeModal(modal);
    });

    // Optional: Add event listener for the form submission
    const form = document.querySelector('.newBookForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form submission, e.g., validate input, update UI, etc.
        console.log('Form submitted');
        closeModal(modal);
    });
});

// Define the Book constructor function
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

// Initialize the library array with some books
const myLibrary = [
    new Book('J.K. Rowling', 'Harry Potter and the Philosopher\'s Stone', 223, true),
    new Book('J.R.R. Tolkien', 'The Hobbit', 310, false),
    new Book('George Orwell', '1984', 328, true),
    new Book('Harper Lee', 'To Kill a Mockingbird', 281, false)
];

for(let book in myLibrary) {
    createBookCard(myLibrary[book]);
}

// Function to add a new book to the library
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.newBookForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        addBookToLibrary();
    });
});

function addBookToLibrary() {
    let author = document.querySelector('#book-author').value;
    let title = document.querySelector('#book-title').value;
    let pages = document.querySelector('#book-pages').value;
    let read = document.querySelector('input[name="book-read"]:checked').value === 'yes';

    const newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);

    createBookCard(newBook);
    document.querySelector('.newBookForm').reset();
}

function createBookCard(book) {
    const cardContainer = document.querySelector('#card-container');

    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = book.title;
    bookCard.appendChild(bookTitle);

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${book.author}`;
    bookCard.appendChild(bookAuthor);

    const bookPages = document.createElement('p');
    bookPages.textContent = `Pages: ${book.pages}`;
    bookCard.appendChild(bookPages);

    const bookRead = document.createElement('button');
    bookRead.textContent = book.read ? 'Read' : 'Not read';
    bookRead.addEventListener('click', () => {
        book.read = !book.read;
        bookRead.textContent = book.read ? 'Read' : 'Not read';
        // Optionally, update the book's status in the library array or storage
    });
    bookCard.appendChild(bookRead);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        cardContainer.removeChild(bookCard);
        // Optionally, remove the book from the library array or storage
    });
    bookCard.appendChild(removeButton);

    cardContainer.appendChild(bookCard);
}

