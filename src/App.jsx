import React from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Exam from "./Pages/Exam"
import {Home} from "./Pages/Home"

export default function(){
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exam" element={<Exam />}></Route>
      </Routes>
    </main>
  )
}