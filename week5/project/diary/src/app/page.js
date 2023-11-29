"use client"

import { useState } from "react";
import Picker from '@/components/Picker.jsx';
import Entry from '@/components/Entry.jsx';


export default function Home() {
  return (
    <div className="main">
      <h1>Diary</h1>
      <div>
        <Picker />
      </div>
      <div></div>
    </div>
  )
}
