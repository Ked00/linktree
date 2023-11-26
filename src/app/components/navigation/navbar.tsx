"use client";
import {AppBar, Button, Container} from "@mui/material";


export default function Navbar() {
  return (
    <AppBar position="fixed" className="h-[100px] bg-black">
      <Container className="flex justify-between p-11" maxWidth="xl">
        <a href="http://localhost:3000/" className="no-underline text-white self-center">
          <h1>Grouped</h1>
        </a>
        <div className="flex place-items-center w-2/4 space-x-5 justify-end">
          <h5>Templates</h5>
          <h5>Discover</h5>
          <Button className="bg-white text-black rounded-full">Sign In</Button>
          <Button className="bg-gray-400 text-white rounded-full">Sign up</Button>
        </div>
      </Container>
    </AppBar>
  );
}
