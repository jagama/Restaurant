import React, { useState, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/navigation/Nav";
import Home from "./components/home/Home";
import Menu from "./components/Menu/Menu";
import Burger from "./components/navigation/Burger";
import Footer from "./components/footer/Footer";
import ScrollToTop from "react-router-scroll-top";
import "./App.css";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Suspense fallback={<div>Loading</div>}>
            {/*external-Navbar*/}
            <div id="navbar">
              <Burger open={open} setOpen={setOpen} />
              <Nav open={open} setOpen={setOpen} />
            </div>
            {/*pagesWrapper*/}
            <div id="wrapper">
              <Route exact path="/" component={Home} />
              <Route path="/menu" component={Menu} />
              {/*dynamicTxt-render*/}
              <Footer />
            </div>
          </Suspense>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
