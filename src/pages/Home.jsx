import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1 className="margin-top">Home</h1>
      <Link to={"/dashboard"}>Dashboard</Link>
    </>
  );
}
