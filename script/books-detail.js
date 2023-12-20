//import product book-deatils data, then store it in a varianle (product
import bookDetails from "../data/books-detail.js";
//print product list on the console
console.log("🚀 ~ file: books-detail.js:2 ~ bookDetail:", bookDetails);
//get the product ID from the URL (address bar)
const urlParams = new URLSearchParams(location.search);
const prodId = urlParams.get("id");
//find product detail by product ID
//loop thorugh product array => find the correct id
const getProdById = (id) => bookDetails.find((item) => item.bookID === +id);
//store product deatils as object
const productDetails = getProdById(prodId);
//print product-detail of specific on the console
console.log("🚀 ~ file: books-detail.js:9 ~ productDetails:", productDetails);

//Render
//Create variable to find  HTML element
//class: book-details
const bookDetailsElement = document.querySelector(".book-details");

//class: thumbnail
const thumbnailElement = document.querySelector(".thumbnail");

//class: bookname
const bookNameElement = document.querySelector(".bookname");
//class: author
const authorElement = document.querySelector(".author");
//class: book-type
const bookTypeElement = document.querySelector(".book-type");
//class: book-type
const bookTypeBelowElement = document.querySelector(".book-type-below");
//class: old-price
const oldPriceElement = document.querySelector(".old-price");
//class: new-price
const newPriceElement = document.querySelector(".new-price");
//class: old-price
const oldPriceBelowElement = document.querySelector(".old-price-below");
//class: new-price
const newPriceBelowElement = document.querySelector(".new-price-below");
//class: description-paragraph
const descriptionElement = document.querySelector(".description-paragraph");
//class: publisher
const publisherElement = document.querySelector(".publisher");
//class: publish-date
const publishDateElement = document.querySelector(".publish-date");
//class: dimension
const dimensionElement = document.querySelector(".dimension");
//class: language
const languageElement = document.querySelector(".language");
//class: pages length
const pageLengthElement = document.querySelector(".page");
//class: weight
const weightElement = document.querySelector(".weight");

//Spread operator
// => extract properties from productDeatils object => make them become variables => so I can
//later use them to render (without calling object each time)
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

// Lazy render (in the case there is not enough time)
// Fill the book container with book details
// bookDetailsElement.innerHTML = `
// <img src="${thumbnail}" alt="${bookName} Cover" />
//   <h1>${bookName}</h1>
//   <p>Author: ${author}</p>
//   <p>Price: ${oldPrice} (Old), ${newPrice} (New)</p>
//   <p>Publisher: ${publisher}</p>
//   <p>Publish Date: ${publishDate.toDateString()}</p>
//   <p>Page Length: ${pageLength}</p>
//   <p>Dimensions: ${dimensions}</p>
//   <p>Weight: ${weight}</p>
//   <p>Language: ${language}</p>
//   <p>Type: ${type}</p>

//   <p>Description: ${description}</p>
// `;

// Render with styled CSS
//use template string to render
// render bookName

thumbnailElement.innerHTML = `
<img src ="
${thumbnail}">
`;
bookNameElement.innerHTML = `${bookName}`;

authorElement.innerHTML = `${author}`;
bookTypeElement.innerHTML = `${type}`;
oldPriceElement.innerHTML = `${oldPrice}`;
newPriceElement.innerHTML = `  ${newPrice}`;
oldPriceBelowElement.innerHTML = `${oldPrice}`;
newPriceBelowElement.innerHTML = `${newPrice}`;
descriptionElement.innerHTML = `${description}`;
publisherElement.innerHTML = `${publisher}`;
publishDateElement.innerHTML = `${publishDate}`;
dimensionElement.innerHTML = `${dimensions}`;
languageElement.innerHTML = `${language}`;

bookTypeBelowElement.innerHTML = `${type}`;
pageLengthElement.innerHTML = `${pageLength}`;
weightElement.innerHTML = `${weight}`;
console.log(
  "🚀 ~ file: books-detail.js:112 ~ bookTypeElement:",
  bookTypeElement
);
