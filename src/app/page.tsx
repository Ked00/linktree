"use client";

import {Container} from "@mui/material";
import Navbar from "./components/navigation/navbar";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="h-3/6 mt-20 text-white">
        <Container className="flex justify-between" maxWidth="lg">
          <div className="w-2/5">
            <h1>
              {/* {" "} adds a space  */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-blue-500">
                Start selling{" "}
              </span>
              on Instagram, Tiktok, Youtube, and more with a few taps of a button
            </h1>
            <p>
              A Koji is a free, digital storefront that makes it easy to sell to your audience
              through social media. Have digital downloads? Premium content? Whatever it is you
              create, you can sell it on social with your Koji.
            </p>
          </div>
          <video controls width="530px" height="239px" className="rounded ">
            <source src="https://youtu.be/6KBp4MCFq_4?si=OtytmvG6xk1gmj9J" />
            <p>Your browser does not support video type.</p>
          </video>
        </Container>

        <Container className="mt-20 h-1/4 flex" maxWidth="lg">
          <h5 className="inline absolute bg-black">Featured in</h5>
          <div className="flex justify-between w-4/5 mx-10">
            {/* <p className="inline translate-x-full">1</p>
            <p className="inline">2</p>
            <p className="inline">3</p>
            <p className="inline">4</p>
            <p className="inline">5</p>
            <p className="inline">6</p>
            <p className="inline">7</p>
            <p className="inline">8</p>
            <p className="inline">9</p> */}
            <p className="inline translate-x-full">10</p>
          </div>
        </Container>
      </div>
    </div>
  );
}
