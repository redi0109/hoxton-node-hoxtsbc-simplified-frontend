import { useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { PageNotFound } from "./pages/PageNotFound";

export type User = {
  id: number;
  email: string;
  password: string;
  transaction: Transaction[];
};

export type Transaction = {
  id: number;
  amount: number;
  userId: number;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
