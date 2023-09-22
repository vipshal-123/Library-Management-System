// Retrieve selected books from localStorage
const selectedBooks = JSON.parse(localStorage.getItem("selectedBooks"));

// Display selected book details
const selectedBooksDetails = document.getElementById("selected-books-details");
selectedBooksDetails.innerHTML = selectedBooks.map((book) => `
  <div class="book-details">
    <img src="${book.image}">
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>ISBN: ${book.isbn}</p>
  </div>
`).join("");

function borrowBooks() {
  const userNameInput = document.getElementById("user-name-input");
  const borrowDateInput = document.getElementById("borrow-date-input");
  const dueDateInput = document.getElementById("due-date-input");

  const userName = userNameInput.value;
  const borrowDate = borrowDateInput.value;
  const dueDate = dueDateInput.value;

  const data = {
    'username': userName, // Add 'username' key to the JSON payload
    'borrow-date': borrowDate,
    'due-date': dueDate
  };

  // Send a POST request to the server
  fetch('/borrow', {
    method: 'POST', // Send a POST request
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        // Clear input fields
        userNameInput.value = "";
        borrowDateInput.value = "";
        dueDateInput.value = "";

        // Redirect to the dashboard or perform any other action
        window.location.href = '/dashboard';
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .catch(error => {
      console.log(error);
      // Handle the error appropriately
    });
  }
    
