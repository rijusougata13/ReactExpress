import React from "react";
import SubmitBlog from "../../components/SubmitBlog";
import ViewBlog from "../../components/ViewBlog";
import { Wrapper } from "../../containers/Home/styles/index";

function Home() {
  return (
    <Wrapper>
      <ViewBlog />
      <SubmitBlog />
    </Wrapper>
  );
}

export default Home;
