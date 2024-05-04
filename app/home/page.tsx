import BookList from "../components/bookList";
import { Header } from "../components/header";

const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative", width: "80%" }}>
          <img
            src="https://wp.penguin.co.uk/wp-content/uploads/2017/07/puffin-and-bear-bookclub-inline-2.jpg"
            alt="book"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <h1>Second-hand Book Marketplace</h1>
            <h3>Earn money and save the environment</h3>
          </div>
        </div>

        <BookList bookList={dummyAllBooksData} />
      </div>
    </>
  );/*  */
};

const dummyAllBooksData = [
  {
    id:0,
    price:'20',
    title: "Charlotte's Web",
    author: "E.B. White",
    edition: "First Edition",
    buy: true,
    exchange: true,
    url: "https://m.media-amazon.com/images/I/61pJ9xnpojL._AC_UF1000,1000_QL80_.jpg",
    condition:'Brand New'
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/en/b/b2/The_BFG_%28Dahl_novel_-_cover_art%29.jpg",
    title: "The BFG",
    author: "Roald Dahl",
    edition: "First Edition",
    buy: true,
    exchange: false,
    price:'22',
    id:1,
    condition:'Brand New'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    edition: "First Edition",
    buy: true,
    exchange: false,
    url: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
    price:'42',
    id:2,
    condition:'Brand New'
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    edition: "First Edition",
    buy: true,
    exchange: true,
    url: "https://upload.wikimedia.org/wikipedia/en/8/86/TheLionWitchWardrobe%281stEd%29.jpg",
    price:'19',
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
    price:'1',
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
    price:'29',
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
    price:'1',
    id:6,
    condition:'Brand New'
  },
  {
    title: "The Secret Garden",
    author: "Frances Hodgson Burnett",
    edition: "First Edition",
    buy: true,
    exchange: true,
    url: "https://www.pluggedin.com/wp-content/uploads/2020/01/secret-garden.jpg",
    price:'2',
    id:7,
    condition:'Brand New'
  },
  {
    title: "The Adventures of Captain Underpants",
    author: "Dav Pilkey",
    edition: "Second Edition",
    buy: true,
    exchange: false,
    url: "https://www.pluggedin.com/wp-content/uploads/2020/01/adventures-of-captain-underpants-cover-729x1024.jpg",
    price:'42',
    id:8,
    condition:'Brand New'
  },
  {
    title: "The Magic Tree House series",
    author: "Mary Pope Osborne",
    edition: "Fifth edition",
    buy: true,
    exchange: false,
    url: "https://cdn.shopify.com/s/files/1/0420/1044/3928/products/00792TheMagicTreehouse1DinosaursBeforeDark_Round_900x_1a00ff70-0071-4144-a1b9-d9b1603e31fb_768x.jpg?v=1659991382",
    price:'9',
    id:9,
    condition:'Brand New'
  },
];



export default Home;
