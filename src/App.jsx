import { Footer, NavBar } from "./components";
import { About, Blog, BlogDetails, Contact, Gallery, Home } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/details/:id" element={<BlogDetails />} />
          <Route path="/about-Me" element={<About />} />
          <Route path="/contact-Us" element={<Contact />} />

          {/* Redirecting routes that don't exist */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
