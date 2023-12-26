// App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";
import Registration from "./components/Registration";
import UserContext from "./contexts/UserContext"; // Импортируйте ваш контекст
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <UserContext>
        {/* Оборачиваем приложение в UserContext */}
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Box>
      </UserContext>
    </BrowserRouter>
  );
};

export default App;
