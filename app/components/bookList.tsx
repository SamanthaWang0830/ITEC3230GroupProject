"use client";

import React, { useState } from "react";
import Book, { BookProps } from "./book";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export interface BookListProps {
  bookList: BookProps[];
}

export const BookList: React.FC<BookListProps> = ({ bookList }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredBooks = bookList.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems:'center', margin:'10px 0'}}
    >
      <div style={{ width:'380px'}} >
        <TextField
          label="Search by book name"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          /* */
        />
      </div>

      <Grid container spacing={4} style={{ padding: "20px" }}>
        {filteredBooks.map((book, index) => {
          const { author, title, edition, buy, exchange, url, id, price} = book;
          console.log(id)
          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Book
                author={author}
                title={title}
                edition={edition}
                buy={buy}
                exchange={exchange}
                url={url}
                id={id}
                price={price}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default BookList;
