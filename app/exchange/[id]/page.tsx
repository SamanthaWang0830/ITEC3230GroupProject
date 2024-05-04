"use client";

import React, { useState } from "react";
import Header from "@/app/components/header";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import BookInfo from "@/app/components/bookInfo";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";

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

const Exchange = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const book = dummyAllBooksData.filter((book) => book.id == params.id)[0];
  const { title, author, edition, condition, exchange, url, price } = book;

  const [yourBookName, setYourBookName] = useState("");
  const [yourAuthor, setYourAuthor] = useState("");
  const [yourEdition, setYourEdition] = useState("");
  const [yourCondition, setYourCondition] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowAlert(true);
    setYourBookName("");
    setYourAuthor("");
    setYourEdition("");
    setYourCondition("");
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
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton>
                <ChangeCircleOutlinedIcon style={{ fontSize: 100 }} />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom style={{ margin: "20px 0" }}>
              The Book You Will Give
            </Typography>

            <Container maxWidth="sm">
              <Box
                height={200}
                width={200}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: "1px solid grey" }}
              >
                Add Photo of Your Book
              </Box>
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <TextField
                  label="Book Name"
                  fullWidth
                  value={yourBookName}
                  onChange={(e) => setYourBookName(e.target.value)}
                  margin="normal"
                  required
                />
                <TextField
                  label="Author"
                  fullWidth
                  value={yourAuthor}
                  onChange={(e) => setYourAuthor(e.target.value)}
                  margin="normal"
                  required
                />
                <TextField
                  label="Edition"
                  fullWidth
                  value={yourEdition}
                  onChange={(e) => setYourEdition(e.target.value)}
                  margin="normal"
                />
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label" required>
                    Condition
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={yourCondition}
                    onChange={(e) => setYourCondition(e.target.value)}
                  >
                    <FormControlLabel
                      value="Brand New"
                      control={<Radio />}
                      label="Brand New"
                    />
                    <FormControlLabel
                      value="Like New"
                      control={<Radio />}
                      label="Like New"
                    />
                    <FormControlLabel
                      value="Used"
                      control={<Radio />}
                      label="Used"
                    />
                  </RadioGroup>
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ margin: "20px 0 30px 0" }}
                >
                  Submit
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
                    <h3>
                      Your request has successfully be sent!
                      <br />
                      Waiting for another people to approve...
                    </h3>
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

export default Exchange;
