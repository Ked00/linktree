"use client";
import {AppBar, Button, Container} from "@mui/material";
import TextLink from "./TextLink";

export default function Navbar() {
  return (
    <AppBar position="static" className="h-[100px] bg-black">
      <Container className="flex justify-between p-11" maxWidth="xl">
        <TextLink href="http://localhost:3000/" text="Grouped" />
        <div className="flex place-items-center w-2/4 space-x-5 justify-end">
          <TextLink href="http://localhost:3000/discover" text="Discover" />
          <Button className="bg-white text-black rounded-full">Sign In</Button>
          <Button className="bg-gray-400 text-white rounded-full">Sign up</Button>
        </div>
      </Container>
    </AppBar>
  );
}
