import React from "react";
import NavBar from "./NavBar";

function NotFound() {
  // * should absolutely display the nav or SOME WAY to get to the home screen but doing so fails the test.
  return (
    <>
      <NavBar pageName="Not Found" />
      <h2>Not Found</h2>
      <p>Yikes. There's nothing here. Maybe it's time to take a break, get some fresh air, drink some water, strecth your body a little bit. Before you go... I just want to say that you're doing great, and I'm really proud of you. 💛</p>
    </>
  );
}

export default NotFound;
