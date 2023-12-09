import bookDetails from "../data/books-detail.js";
// Import bookDetails from "../data/books-detail.js";

// ... (other existing code)
const BookSlide = document.querySelector(".book-slides");

// Function to handle thumbnail clicks
const handleThumbnailClick = (event) => {
  // event.preventDefault(); // Prevent default link behavior
  // if (event.target.tagName === "IMG") {
  //   const bookId = event.target.dataset.bookId; // Get book ID from the data attribute
  //   // Navigate to the respective book detail page using the bookId
  //   // window.location.href = `./book-detail.html?id=${bookId}`;
  // }
};

// Add event listener to book slide container for delegated clicks
BookSlide.addEventListener("click", handleThumbnailClick);

// Rendering book thumbnails
BookSlide.innerHTML = bookDetails
  .map(
    (book) =>
      `<a href="./book-detail.html?id=${book.bookID}">
        <img src="${book.thumbnail}" data-bookId="${book.bookID}" />
      </a>`
  )
  .join("");
