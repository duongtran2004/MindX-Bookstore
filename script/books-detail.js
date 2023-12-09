import products from "../data/books-detail.js";
// explain these line of code:
console.log("🚀 ~ file: books-detail.js:2 ~ products:", products);
const urlParams = new URLSearchParams(location.search);
const prodId = urlParams.get("id");

const getProdById = (id) => products.find((item) => item.bookID === +id);

const productDetails = getProdById(prodId);
console.log("🚀 ~ file: books-detail.js:9 ~ productDetails:", productDetails);

//render

const bookDetailsElement = document.querySelector(".book-details");
//Spread operator

const {
  bookName,
  author,
  oldPrice,
  newPrice,
  publisher,
  publishDate,
  pageLength,
  dimensions,
  weight,
  language,
  type,
  thumbnail,
  description,
} = productDetails;

// Fill the book container with book details
bookDetailsElement.innerHTML = `
  <h1>${bookName}</h1>
  <p>Author: ${author}</p>
  <p>Price: ${oldPrice} (Old), ${newPrice} (New)</p>
  <p>Publisher: ${publisher}</p>
  <p>Publish Date: ${publishDate.toDateString()}</p>
  <p>Page Length: ${pageLength}</p>
  <p>Dimensions: ${dimensions}</p>
  <p>Weight: ${weight}</p>
  <p>Language: ${language}</p>
  <p>Type: ${type}</p>
  <img src="${thumbnail}" alt="${bookName} Cover" />
  <p>Description: ${description}</p>
`;
