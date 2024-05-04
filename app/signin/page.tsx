"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Link
} from "@mui/material";

export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
    <Container maxWidth="sm" style={{ margin: "100px auto" }}>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit} style={{marginBottom:'20px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Sign In
            </Button>
          </Grid>
        </Grid>
      </form>

      <Link href="/">Do not have an account yet? Register</Link>
    </Container>
  );
}
