const mongoose = require("mongoose");
const connectionStr = require("./config");

const Book = require("./schema");

mongoose.connect(connectionStr, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("open", () => {
  console.log("connected to db");
});

const newBook = {
  author: ["Abraham Silberschatz", "Henry F. Korth", "S. Sudarshan "],
  name: "Database System Concept",
  price: 1199,
};

// add a book

// let book = new Book(newBook);
// book
//   .save()
//   .then((book) => {
//     console.log({ msg: "book added successfully", book });
//   })
//   .catch((err) => {
//     console.log({ msg: "error", err });
//   });

const updateBook = {
  author: ["Abraham Silberschatz", "Henry F. Korth", "S. Sudarshan "],
  name: "Database System Concepts", // update - change name
  price: 1199,
};

// update a book

Book.findById("5ffb4f7b47cda12934d85e49", function (err, book) {
  book.author = updateBook.author;
  book.name = updateBook.name;
  book.price = updateBook.price;

  book
    .save()
    .then((book) => {
      console.log("updated ", book);
    })
    .catch((err) => {
      console.log("Update not possible", err);
    });
});
