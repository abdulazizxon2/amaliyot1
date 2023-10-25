import React from "react";
import Navbar from "../components/Navbar/Navbar"
import Glavniy from "./Glavniy"
import Oplata from "./Oplata"
import Dostavka from "./Dostavka"
import Vozvrat from "./Vozvrat"
import Otvizv from "./Otvizv"
import Vapros from "./Vapros"
import Novosti from "./Novosti"
import Kontakt from "./Kontakt"
import { Route,Routes } from "react-router-dom";



export default function PageIndex() {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Glavniy />} />
          <Route path="/oplata" element={<Oplata />} />
          <Route path="/dostavka" element={<Dostavka />} />
          <Route path="/vozvrat" element={<Vozvrat/>}/>
          <Route path="/otvizv" element={<Otvizv />}/>
          <Route path="/vapros" element={<Vapros />}/>
          <Route path="/novosti" element={<Novosti />}/>
          <Route path="/kontakt" element={<Kontakt />}/>
        </Route>
      </Routes>
  </div>);
}