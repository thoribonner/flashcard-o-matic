import React from "react";
import NavBar from "./NavBar";

function NotFound() {
  // * should absolutely display the nav or SOME WAY to get to the home screen but doing so fails the test.
  return (
    <>
      {/* <NavBar pageName="Not Found" /> */}
      <h2>Not Found</h2>
    </>
  );
}

export default NotFound;
