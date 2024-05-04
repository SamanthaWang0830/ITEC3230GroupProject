"use client";

import React, { useState } from "react";
import Header from "../components/header";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
} from "@mui/material";

const Sell = () => {
  const [price, setPrice] = useState("");
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [edition, setEdition] = useState("");
  const [condition, setCondition] = useState("");
  const [exchange, setExchange] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setShowAlert(true);
    setBookName("");
    setAuthor("");
    setEdition("");
    setCondition("");
    setExchange("");
    setPrice("");
  };

  const handleCloseAlert = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setShowAlert(false);
  };

  return (
    <>
      <Header />

      <h1 style={{ margin: "20px auto 30px auto", textAlign: "center" }}>
        Sell your used book
      </h1>

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
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Author"
            fullWidth
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            label="Edition"
            fullWidth
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
            margin="normal"
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" required>
              Condition
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
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
              <FormControlLabel value="Used" control={<Radio />} label="Used" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" required>
              Do you also want to exchange it?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={exchange}
              onChange={(e) => setExchange(e.target.value)}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <TextField
            label="Price"
            fullWidth
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            margin="normal"
            required
          />
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
        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert severity="success" onClose={() => setShowAlert(false)}>
            Book successfully added!
          </Alert>
        </Snackbar>
      )}
    </>
  );
};

export default Sell;
