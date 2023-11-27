"use client";

import { useState } from "react";
import defaultPlanets from "../lib/planets.js";
import Divider from "@/components/Divider.jsx";
import styles from './page.module.css';

export default function Home() {

  const [planets, setPlanets] = useState(defaultPlanets);

  return (
    <main>
      <div>
        <h3>1</h3>
        <Divider />
        <div className="square"></div>
        <h3>2</h3>
        <Divider />
        <img src="/meme.webp" />

        <h3>3</h3>
        <Divider />
        <h3>Alien Planets</h3>
        <div className="control">
          {planets.map((planet) => {
            return ( 
              <div className="planet-container"  key={planet.id}>
                <div className="planet-boxes">
                  <p>{planet.emoji}</p>
                  <p>{planet.name}</p>
                  <p>{planet.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> 
    </main>
  )
}
