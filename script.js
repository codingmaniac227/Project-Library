const myLibrary = [];

function Book(id, title) {
  this.id = id;
  this.title = title;
}

Book.prototype.bookName = function () {
  console.log(`Book: ${this.title}`);
};

function addBookToLibrary(title) {
  const newBook = new Book(crypto.randomUUID(), title);
  myLibrary.push(newBook);
}

const bookList = document.getElementById('books');
const newBookBtn = document.getElementById('new-book-btn');
const newBookForm = document.getElementById('new-book-form');
const catalogueSection = document.getElementById('catalogue');
const form = document.querySelector('form');
const cancelBtn = form.querySelector('button[type="button"]');

function displayLoop() {
  bookList.innerHTML = '';

  for (let i = 0; i < myLibrary.length; ++i) {
    const createBookDiv = document.createElement('div');
    createBookDiv.innerHTML = `
      <h3>${myLibrary[i].title}</h3>
      <p>ID: ${myLibrary[i].id}</p>
    `;
    createBookDiv.classList.add('book-card');
    bookList.appendChild(createBookDiv);
  }
}

addBookToLibrary('The Hobbit');
addBookToLibrary('Harry Potter');
displayLoop();


newBookBtn.addEventListener('click', function () {
  catalogueSection.style.display = 'none';
  newBookForm.style.display = 'block';
});


cancelBtn.addEventListener('click', function () {
  newBookForm.style.display = 'none';
  catalogueSection.style.display = 'block';
  form.reset(); 
});
