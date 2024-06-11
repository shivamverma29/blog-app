import "./App.css";
import BlogDetails from "./components/BlogDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/blog-details/:id" Component={BlogDetails} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
