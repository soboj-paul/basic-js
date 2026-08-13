let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
let keys = Object.keys(book);
let values = Object.values(book);
let objToArr = Object.entries(book);
delete book.pages;
console.log(book)
console.log(keys)
console.log(values)
console.log(objToArr)