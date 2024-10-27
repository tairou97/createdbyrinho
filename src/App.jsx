import { useState } from "react";
import Img from "./assets/box.jpeg";
import img2 from "./assets/box2.jpeg";
import img3 from "./assets/box3.jpeg";
import img4 from "./assets/box4.jpeg";

import "./App.css";
const immg = [
  { id: 1, src: Img },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
];
function App() {
  return (
    <>
      <section className="hero">
        <div className="pre-loader">
          <p>Loading</p>
          <div className="conter">
            <div className="digit-1">
              <div className="num">0</div>
              <div className="num offset">1</div>
            </div>
            <div className="digit-2">
              <div className="num">0</div>
              <div className="num offset">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
              <div className="num">0</div>
            </div>
            <div className="digit-3">
              <div className="num">0</div>
              <div className="num">1</div>
              <div className="num">2</div>
              <div className="num">3</div>
              <div className="num">4</div>
              <div className="num">5</div>
              <div className="num">6</div>
              <div className="num">7</div>
              <div className="num">8</div>
              <div className="num">9</div>
            </div>
            <div className="digit-4">%</div>
          </div>
          <div className="progress-bar"></div>
        </div>
        <div className="hero-img">
          {immg.map((img) => (
            <img key={img.id} src={img.src} alt="hero" />
          ))}
        </div>
      </section>
      <div className="website-content">
        <nav>
          <div className="logo">
            <p>Logo</p>
          </div>
          <div className="site-info">
            <p>Photographer, Creative Director, Web Developer</p>
          </div>
          <div className="Menu">
            <p>Menu</p>
          </div>
        </nav>
        <div className="header">
          <h1>Howard</h1>
        </div>
      </div>
    </>
  );
}

export default App;
