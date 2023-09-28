import Button from "../components/atoms/button"
import Gambar from "../components/atoms/gambar"
import Tittle from "../components/atoms/title"
import React, { useState, useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";


function App() {
  const [dataaa,setDataaa] = useState([])
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBvJ__cYX-6eJsBLKtwYq9stIw8SDMrw5g",
      authDomain: "perlombaan-agus.firebaseapp.com",
      databaseURL: "https://perlombaan-agus-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "perlombaan-agus",
      storageBucket: "perlombaan-agus.appspot.com",
      messagingSenderId: "38437013079",
      appId: "1:38437013079:web:78fdbd2c838d39f0738512"
    };
  
    const app = initializeApp(firebaseConfig);
  
    const db = getDatabase(app);
  
    const dataRef = ref(db, "buttons");
  
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setDataaa(data)
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])
  
    return (
    <>
      <img className="w-full" src='/img/Header.png' />
      <div class="bg-white py-5 sm:py-10">
        <div className="flex justify-center">
          <Gambar src='/img/AIS.png' />
          <Gambar src='/img/AISA.png' />
          <Gambar src='/img/Fest.png' />
        </div>
        <div className="max-w-7xl text-center ">
          <Tittle color="red-700" font="bold" size="xl md:text-4xl">KEJUARAAN PANAHAN</Tittle>
          <Tittle color="black" font="bold" size="xl md:text-4xl">Drs. H. Dede Satibi Cup Ke-2</Tittle>
          <Tittle color="red-700" size="sm md:text-xl">Tingkat SD & SMP Sederajat</Tittle>
          <Tittle color="red-700" size="sm md:text-xl">se-Jawa Barat</Tittle>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center px-20 my-10">
        {dataaa.map(({title,to}, index) => (
            <Button to={to}>{title}</Button>
          ))}
        </div>
      </div>
      <div class="bg-white sm:my-5 md:mt-10">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-4xl text-center">
            <h2 class="text-sm md:text-xl font-bold leading-7 text-red-700">Al Mashduqi Islamic School Archery Garut</h2>
            <p class="mt-2 text-xl font-bold tracking-tight text-amber-500 sm:text-4xl">"Amazing Inspiration for Coloring the World"</p>
            <h2 class="mt-6 text-xl font-bold">"... wa maa romaita idz romaita, walakinnallaha romaa."</h2>
            <p class=" text-md text-black">"... dan bukan kamu yang melempar ketika kamu melempar, tetapi Allah-lah yang melempar."</p>
            <p class=" text-md text-black">(Al-Anfal: 17)</p>
          </div>
          <div class="flex space-x-16 justify-center mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl mb-10 md:mb-40">

                  <a href="https://instagram.com/ais.archery?igshid=OGQ5ZDc2ODk2ZA==" class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                  <svg class="h-7 w-7 " fill="white"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24">
                      <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                  </svg>
                  </a>
                  <a href="https://s.id/MapsKPDSCUP2" class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 " fill="white" viewBox="0 -960 960 960" ><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                  </a>
                  <a href="mailto:aisg.archery@gmail.com?subject=Pertanyaan%20Terkait%20Kejuaraan%20Panahan&body=Bismillah%0AAssalamu%27alaikum%20Warahmatullahi%20Wabarakatuh%0ASaya%20ingin%20bertanya%20terkait%20%22Kejuaraan%20Panahan%20Drs.%20H.%20Dede%20Satibi%20Cup%20Ke-2%20se-Jawa%20Barat%20Tingkat%20SD%20%26%20SMP%20Sederajat%22" class="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 " fill="white" viewBox="0 -960 960 960" ><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                  </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
