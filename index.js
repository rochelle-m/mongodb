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
  author: ["Lewis Caroll"],
  name: "Alice In Wonderland",
  price: 1099,
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

// Book.findById("5ffb4f7b47cda12934d85e49", function (err, book) {
//   book.author = updateBook.author;
//   book.name = updateBook.name;
//   book.price = updateBook.price;

//   book
//     .save()
//     .then((book) => {
//       console.log("updated ", book);
//     })
//     .catch((err) => {
//       console.log("Update not possible", err);
//     });
// });

// list all books

// Book.find(function (err, books) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(books);
//   }
// });

// find book by id

// let id = "5ffb4f7b47cda12934d85e49";
// Book.findById(id, function (err, book) {
//   console.log(book);
// });

// delete [where price is less than 1100]

Book.remove({ price: { $lt: 1100 } }, (err, res) => {
  console.log(err, res.deletedCount);
});
