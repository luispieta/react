import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/dados/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}
