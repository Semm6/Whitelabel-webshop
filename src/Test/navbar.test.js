import React from "react";
import ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom/extend-expect";


afterEach(() => {
  cleanup();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Navbar />, div);
});

it("true is still true :)", () => {
  expect(true).toBe(true);
});