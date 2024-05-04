"use client";

import Header from "@/app/components/header";
import {
  Alert,
  Backdrop,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BookInfo from "@/app/components/bookInfo";
import { useRouter } from "next/navigation";
import Divider from "@mui/material/Divider";

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

const BuyBook = ({ params }: { params: { id: number } }) => {
  const book = dummyAllBooksData.filter((book) => book.id == params.id)[0];
  const { title, author, edition, condition, exchange, url, price } = book;
  const total = Number(price) + 10;

  const router = useRouter();

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowAlert(true);
  };

  const handleCloseAlert = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShowAlert(false);
    router.push("/home");
  };

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <BookInfo
              author={author}
              title={title}
              edition={edition}
              exchange={exchange}
              url={url}
              condition={condition}
              buy={false}
              id={0}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container maxWidth="sm" style={{ marginBottom: "50px" }}>
              <Typography variant="h5" gutterBottom>
                Amount of Payment
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    style={{ fontFamily: "monospace" }}
                  >
                    Book
                    Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
                    {price}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    style={{ fontFamily: "monospace" }}
                  >
                    + Delivery
                    Fee:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$10
                  </Typography>
                  <Divider />
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    color="secondary"
                    style={{ fontFamily: "monospace" }}
                  >
                    Total
                    Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$
                    {total}
                  </Typography>
                </Grid>
              </Grid>
            </Container>

            <Container maxWidth="sm">
              <Typography variant="h6" gutterBottom>
                Pay by Credit/Debit Card
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Name on the Card"
                  fullWidth
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  margin="normal"
                  required
                />
                <TextField
                  label="Card Number"
                  fullWidth
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  margin="normal"
                  required
                />
                <TextField
                  label="Expiry Date (MM/YY)"
                  fullWidth
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  margin="normal"
                  required
                />
                <TextField
                  label="CVV"
                  fullWidth
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  margin="normal"
                  required
                />
                <Button type="submit" variant="contained" color="primary">
                  Pay Now
                </Button>
              </form>
            </Container>

            {showAlert && (
              <>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open={showAlert}
                  onClick={handleCloseAlert}
                >
                  <Alert severity="success" onClose={() => setShowAlert(false)}>
                    <h3>You have successfully paid!</h3>
                    <p>
                      (You would better to take a video when you unpack your parcel,{" "}
                      <br /> in case you want to return it and video can be used
                      as an evident)
                    </p>
                  </Alert>
                </Backdrop>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BuyBook;
