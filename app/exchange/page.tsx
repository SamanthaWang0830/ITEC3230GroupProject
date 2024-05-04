import React from "react";
import BookList from "../components/bookList";
import Header from "../components/header";

const dummyExchangeBooksData = [
  {
    title: "Charlotte's Web",
    author: "E.B. White",
    edition: "First Edition",
    buy: true,
    exchange: true,
    url: "https://m.media-amazon.com/images/I/61pJ9xnpojL._AC_UF1000,1000_QL80_.jpg",
    id:0,
    condition:'Brand New'
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    edition: "First Edition",
    buy: true,
    exchange: true,
    url: "https://upload.wikimedia.org/wikipedia/en/8/86/TheLionWitchWardrobe%281stEd%29.jpg",
    id:3,
    condition:'Brand New'
  },
  {
    title: "Matilda",
    author: "Roald Dahl",
    edition: "First Edition",
    buy: true,
    exchange: true,
    url: "https://m.media-amazon.com/images/I/81F5tUvh0JL._AC_UF1000,1000_QL80_.jpg",
    id:4,
    condition:'Brand New'
  },
  {
    title: "Charlie and the Chocolate Factory",
    author: "Roald Dahl",
    edition: "First Edition",
    buy: true,
    exchange: true,
    url: "https://m.media-amazon.com/images/I/51cIsgaYsOL._AC_UF1000,1000_QL80_.jpg",
    id:5,
    condition:'Brand New'

  },
  {
    title: "Where the Sidewalk Ends",
    author: "Shel Silverstein",
    edition: "First Edition",
    buy: true,
    exchange: true,
    url: "https://dynamic.indigoimages.ca/books/9780060572341.jpg?scaleup=true&width=600&quality=85&lang=en",
    id:6,
    condition:'Brand New'

  },
  {
    id:7,
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    edition: "First Edition",
    buy: true,
    exchange: true,
    url: "https://www.pluggedin.com/wp-content/uploads/2020/01/secret-garden.jpg",
    condition:'Brand New'

  },
];

const Exchange = () => {
  return (
    <>
      <Header />
      <h1 style={{margin:'20px auto 30px auto', textAlign: 'center'}}>The books that can be exchanged</h1>
      <BookList bookList={dummyExchangeBooksData} />
    </>
  );
};

export default Exchange;
