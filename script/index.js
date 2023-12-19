// Import bookDetails from "../data/books-detail.js";
import bookDetails from "../data/books-detail.js";
// Find element with class book=slides, and store it into a variable
const BookSlide = document.querySelector(".book-slides");
console.log(BookSlide);

// Function to handle thumbnail clicks (empty function for now, then assign as event handler to BookSlide)

const handleThumbnailClick = (event) => {};

// Add event listener to book slide container
BookSlide.addEventListener("click", handleThumbnailClick);
// =>trigger when any emlment inside BookSlide container is clicked
// Rendering book thumbnails
BookSlide.innerHTML = bookDetails
  .map(
    (book) =>
      `<a href="./book-detail.html?id=${book.bookID}">
        <img src="${book.thumbnail}" data-bookId="${book.bookID}" />
      </a>`
  )
  .join("");
