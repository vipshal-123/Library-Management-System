// Sample books data
let books = [
    { title: "World Book Day", author: "Tom Fletcher", isbn: "100231", category: "Story", image: "/static/img/book1.jpg" },
    { title: "Neem The Half-Boy", author: "Idries Shah", isbn: "100321", category: "Story", image: "/static/img/book2.png" },
    { title: "The Farmer's Wife", author: "Idries Shah", isbn: "112548", category: "Story", image: "/static/img/book3.png" },
    { title: "Harry Potter", author: "J.K. Rowling", isbn: "100233", category: "Kids", image: "/static/img/book4.png" },
    { title: "A Game of Thrones", author: "George R.R Martin", isbn: "123000", category: "Kids", image: "/static/img/book5.jpeg" },
    { title: "The Magic Horse", author: "Idries Shah", isbn: "852654", category: "Story", image: "/static/img/book6.png" },
    { title: "The Thousand Eyes", author: "A.K LarkWood", isbn: "785698", category: "Kids", image: "/static/img/book7.jpg" },
    { title: "One Day, Life will Change", author: "Saranya Umakanthan", isbn: "102351", category: "textbooks", image: "/static/img/book8.jpg" },
    { title: "Sherlock Holmes", author: "Sir Arthur Conan Doyle", isbn: "100001", category: "textbooks", image: "/static/img/book9.jpg" },
    { title: "Under the Whispering Door", author: "T.J Klune", isbn: "785236", category: "Kids", image: "/static/img/book10.jpg" },
    { title: "Wings of Fire", author: "A.P.J. Abdul Kalam", isbn: "333666", category: "textbooks", image: "/static/img/book11.jpg" },
    { title: "Miracles of your Mind", author: "Dr. Joseph Murphy", isbn: "456123", category: "textbooks", image: "/static/img/book12.jpg" },
  ];
  
  let selectedBooks = [];
  
  // Function to display books based on category
function displayBooks(category) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  // Filter books based on category
  const filteredBooks = category === "all" ? books : books.filter((book) => book.category === category);

  // Add filtered books to the list
  filteredBooks.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    const bookImage = document.createElement("img");
    bookImage.src = book.image;

    const borrowButton = document.createElement("button");
    borrowButton.innerText = "Borrow";
    borrowButton.addEventListener("click", () => selectBook(book));

    bookDiv.appendChild(bookImage);
    bookDiv.appendChild(borrowButton);

    bookList.appendChild(bookDiv);
  });
}

// Function to handle category change
function changeCategory() {
  const categorySelect = document.getElementById("category-select");
  displayBooks(categorySelect.value);
}

// Function to handle book selection
function selectBook(book) {
  selectedBooks.push(book);
  displaySelectedBooks();
}

  // Function to remove a selected book
  function removeBook(index) {
    selectedBooks.splice(index, 1);
    displaySelectedBooks();
  }

// Function to display selected books
function displaySelectedBooks() {
  const selectedBooksList = document.getElementById("selected-books-list");
  selectedBooksList.innerHTML = "";

  selectedBooks.forEach((book, index) => {
    const bookItem = document.createElement("li");
    bookItem.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div style="text-align: left;" display: inline-block;>
          <span>${book.title} - ${book.author} - ${book.isbn}</span> &nbsp; &nbsp; &nbsp;
        </div>
        <div>
          <button style="margin-left: auto; display: inline-block;" onclick="removeBook(${index})">Remove</button>
        </div>
      </div>
    `;
    selectedBooksList.appendChild(bookItem);
  });
}


// Function to redirect to borrow page
function redirectToBorrowPage() {
  // Store selected books in localStorage
  localStorage.setItem("selectedBooks", JSON.stringify(selectedBooks));

  // Redirect to borrow page
  window.location.href = "/borrow";
}


// Display initial books
displayBooks("all");
