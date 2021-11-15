import React from "react";
import Layout from "./pages/Layout";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Content from "./components/Content/Content";
import { MainProvider } from "./context/mainContext";

function App() {
  return (
    <div className="App">
      <MainProvider>
        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Content />} />
              <Route exact path="/amazon" element={<Content />} />
              <Route exact path="/americanexpress" element={<Content />} />
              <Route exact path="/airbnb" element={<Content />} />
              <Route exact path="/apple" element={<Content />} />
            </Routes>
          </Layout>
        </Router>
      </MainProvider>
    </div>
  );
}

export default App;
