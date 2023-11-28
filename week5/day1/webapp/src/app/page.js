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
        <Divider section="1" />
        <div className="square"></div>
        <Divider section="2"  />
        <img src="/meme.webp" />
        <Divider section="3"  />
        <h2>Alien Planets</h2>
        <div className="control">
          {planets.map((planet) => {
            return ( 
              <div className="planet-container"  key={planet.id}>
                <div className="planet-boxes">
                  <p>{planet.emoji}</p>
                  <p>{planet.name}</p>
                  <p>{planet.name} is {planet.distanceFromEarth} miles from earth. {planet.name} is believed to {planet.hasLife ? "have life" : "not have life"}. The atmosphere of Xenophylia is {planet.atmosphere}.</p>
                </div>
              </div>
            );
          })}
        </div>
      </div> 
    </main>
  )
}