'use client' // to use useEffect with Next

import { useEffect, useState } from "react";
import { FaFilm, FaSearch, FaStar } from "react-icons/fa";


export default function App() {

  // Personal API key to delete :
  const API_KEY = "xxx"

  // For form
  const [title, setTitle] = useState("")
  const [isSearching, setSearching] = useState(false)

  // For found movie
  // Infos to retrieve on the target movie
  const [movieTitle, setMovieTitle] = useState("")
  const [movieWriter, setMovieWriter] = useState("")
  const [movieImdbRating, setMovieImdbRating] = useState("")
  const [moviePlot, setMoviePlot] = useState("")
  const [moviePoster, setMoviePoster] = useState("")
  const [movieSearched, setMovieSearched] = useState(false) // to display results

  const searchMovie = (e) => {
    e.preventDefault()
    setSearching(true)
    e.target.reset()
  }

  useEffect(() => {

    // if (isSearching) {
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          // Display a div with error message
          console.error("Server not found!")
          return
        }

        return response.json()

      })
      .then(data => {
        setMovieTitle(data.Title)
        setMovieWriter(data.Writer)
        setMovieImdbRating(data.imdbRating)
        setMoviePlot(data.Plot)
        setMoviePoster(data.Poster)
        setMovieSearched(true)
      })

    return () => {
      console.log("Clearing")
    }
    // }


  }, [isSearching])

  return <div className="app bg-black text-white min-h-screen max-h-full">
    {/* HEADER */}
    <header className="header h-16 flex justify-center items-center">
      <h1 className="text-3xl font-bold italic font-mono"><a href="#" className="text-orange-500">M<FaFilm className="inline" />VIEPEDIA.</a></h1>
    </header>

    {/* HERO */}
    <div>
      {/* Where user searches his movies */}
      <form className="mb-3 text-center" onSubmit={searchMovie}>
        <label htmlFor="movieInput">Rechercher un film</label>
        <div className="flex justify-center mt-2">
          <input type="text" placeholder="Aladdin, ..." className="placeholder:italic rounded-l text-orange-500 bg-transparent border border-orange-500 px-2" name="movie_input" id="movieInput" onChange={(e) => setTitle(e.target.value)} />
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
        {/* Where results for the query appear */}
        {/* Display only one column on mobile */}

        <div className="results grid grid-cols-1 place-items-center gap-y-6 p-3">
          {/* Todo : Do a conditional rendering
            before that separe form from page.js in a new /components folder
          */}
          {movieSearched && <div className="movie-1 flex justify-center gap-3 w-[400px]">
            <div className="movie-image w-[200px] h-[300px] rounded overflow-hidden">
              <img src={moviePoster} alt="First cover of movie" className="w-full h-full" />
            </div>
            <div className="movie-infos w-[200px] h-[300px] flex flex-col justify-between items-center p-2">
              <h2 className="font-bold text-white">{movieTitle}</h2>
              <p className="italic text-slate-500">{movieWriter}</p>
              <div className="text-yellow-500 inline-flex justify-center items-center gap-2">{movieImdbRating} <FaStar /></div>
              <p className="text-slate-300 text-xs text-justify">{moviePlot}</p>

            </div>
          </div>}

        </div>
      </div>
    </div >

    <footer className="text-center">
      <p>Copyright &copy; | Loick Cherimont 2024</p>
    </footer>
  </div >
}
