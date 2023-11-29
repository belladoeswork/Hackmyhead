"use client"

import styles from './page.module.css';
import Divider from '@/components/Divider.jsx';
import Box from '@/components/Box.jsx';
import Mirror from '@/components/Mirror.jsx';
import Counter from '@/components/Counter.jsx';
import Race from '@/components/Race.jsx';
import Stopwatch from '@/components/Stopwatch.jsx';


import { useState } from "react";

export default function Home() {

  return (
    <main>
      <h2>Day 10</h2>
      <Divider />
      <Box />
      <Mirror />
      <Counter />
      <Race />
      <Stopwatch />  
    </main>
  )
}
