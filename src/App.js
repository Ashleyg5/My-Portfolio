import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "./App.css"
const App = () => <PortfolioContainer />;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  })

  const hiddenEl = document.querySelectorAll('.hidden');
hiddenEl.forEach((el) => observer.observe(el));

export default App;
