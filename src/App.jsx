import { useState } from "react";
import Navigation from "./components/Navbar";
import Income from "./components/Income";
import List from "./components/List";
import Total from "./components/Total";
import InputExpense from "./components/InputExpense";

export default function App() {

  return (
  <>
  <Navigation/>
  <Income/>
  <InputExpense/>
  <List/>
  <Total/>
  </>
  );
}
