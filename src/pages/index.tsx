import { Routes, Route, Navigate } from "react-router-dom";
import { AllPosts } from "./all-posts";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="posts" />} />
      
      <Route path="posts" element={<AllPosts />} />
    </Routes>
  );
};
