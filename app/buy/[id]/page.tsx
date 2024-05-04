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
import { dummyAllBooksData } from "@/app/home/page";
import BookInfo from "@/app/components/bookInfo";
import { useRouter } from "next/navigation";
import Divider from "@mui/material/Divider";

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
