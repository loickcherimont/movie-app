'use client' // to use hooks with Next

import { useState } from "react";
import { FaFilm, FaSearch, FaStar } from "react-icons/fa";


export default function App() {

  // Personal API key to delete :
  const API_KEY = "xxx"

  // For form
  const [data, setData] = useState({})

  // Indicator
  const [isSubmitted, setIsSubmitted] = useState(false)

  let [title, setTitle] = useState("")

  // Search user's movie  
  const handleSubmit = (e) => {
    e.preventDefault()
    title = title.toLowerCase()

    fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          // Display a div with error message
          console.error("Server not found!")
          return
        }

        return response.json()

      })
      .then(d => {
        setIsSubmitted(true)
        setData(d)
        console.log(data)
      })

    // Reset field and submit indicator 
    setTitle("")
    setIsSubmitted(false)
  }

  return <div className="app bg-black text-white min-h-screen max-h-full">
    {/* HEADER */}
    <header className="header h-16 flex justify-center items-center">
      <h1 className="text-3xl font-bold italic font-mono"><a href="#" className="text-orange-500">M<FaFilm className="inline" />VIEPEDIA.</a></h1>
    </header>

    {/* HERO */}
    <div>
      {/* Where user searches his movies */}
      <form className="mb-3 text-center" onSubmit={handleSubmit}>
        <label htmlFor="movieInput">Rechercher un film</label>
        <div className="flex justify-center mt-2">
          <input
            type="text"
            placeholder="Aladdin, ..."
            className="placeholder:italic rounded-l text-orange-500 bg-transparent border border-orange-500 px-2"
            name="movie_input"
            id="movieInput"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <button
            type="submit"
            className="bg-orange-500 rounded-r text-white h-auto p-2">
            <FaSearch />
          </button>
        </div>

      </form>


      <div className="p-2">
        <h2 className="text-orange-300 text-xl">Résultats</h2>
        <p className="text-slate-300 italic text-sm">Vos films apparaîtront ici...</p>


        {isSubmitted && <div className="results grid grid-cols-1 place-items-center gap-y-6 p-3">

          <div className="movie-1 flex justify-center gap-3 w-[400px]">
            <div className="movie-image w-[200px] h-[300px] rounded overflow-hidden">
              <img src={data.Poster} alt="First cover of movie" className="w-full h-full" />
            </div>
            <div className="movie-infos w-[200px] h-[300px] flex flex-col justify-between items-center p-2">
              <h2 className="font-bold text-white">{data.Title}</h2>
              <p className="italic text-slate-500">{data.Writer}</p>
              <div className="text-yellow-500 inline-flex justify-center items-center gap-2">{data.imdbRating} <FaStar /></div>
              <p className="text-slate-300 text-xs text-justify">{data.Plot}</p>

            </div>
          </div>
        </div>}

      </div>
    </div >

    <footer className="text-center">
      <p>Copyright &copy; | Loick Cherimont 2024</p>
    </footer>
  </div >
}
