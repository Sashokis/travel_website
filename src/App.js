import React from "react";
import NavMenu from "./components/NavMenu";
import CatalogTour from "./components/CatalogTour";
import FooterBlock from "./components/FooterBlock";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavMenu />
      </header>
      <main>
        <CatalogTour />
      </main>
      <footer>
        <FooterBlock />
      </footer>
    </div>
  );
}

export default App;
