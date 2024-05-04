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
import { dummyAllBooksData } from "@/app/home/page";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";

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
                      (You'd better to take a video when you unpack your parcel,{" "}
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
