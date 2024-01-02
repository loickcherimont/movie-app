import { FaFilm, FaSearch, FaStar } from "react-icons/fa";

export default function App() {
  return <div className="app bg-black text-white min-h-screen max-h-full">
    {/* <section className="section"> */}
    {/* HEADER */}
    <header className="header h-16 flex justify-center items-center">
      <h1 className="text-3xl font-bold italic font-mono"><a href="#" className="text-orange-500">M<FaFilm className="inline" />VIEPEDIA.</a></h1>
    </header>

    {/* HERO */}
    <div>
      {/* Where user searches his movies */}
      <form className="mb-3 text-center">
        <label htmlFor="movieInput">Rechercher un film</label>
        <div className="flex justify-center mt-2">
          <input type="text" placeholder="Aladdin, ..." className="placeholder:italic rounded-l text-orange-500 bg-transparent border border-orange-500 px-2" name="movie_input" id="movieInput" />
          <button type="submit" className="bg-orange-500 rounded-r text-white h-auto p-2">
            <FaSearch />
          </button>
        </div>

      </form>

      <div className="p-2">
        <h2 className="text-orange-300 text-xl">Résultats</h2>
        <p className="text-slate-300 italic text-sm">Vos films apparaîtront ici...</p>
        {/* Where results for the query appear */}
        <div className="results grid grid-cols-1 place-items-center gap-y-6 p-3">


          {/* Display only one column on mobile */}

          <div className="movie-1 flex justify-center gap-3 w-[400px]">
            <div className="movie-image w-[200px] h-[300px] rounded overflow-hidden">
              <img src="https://picsum.photos/200/300" alt="First cover of movie" className="w-full h-full" />
            </div>
            <div className="movie-infos w-[200px] h-[300px] flex flex-col justify-between items-center p-2">
              <h2 className="font-bold text-white">Titre du Film.</h2>
              <p className="italic text-slate-500">John Doe</p>
              <div className="text-yellow-500 inline-flex justify-center items-center gap-2">3.4 <FaStar /></div>
              <p className="text-slate-300 text-xs text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at urna quis tortor convallis dictum. Nunc purus leo, sagittis non condimentum eget, dictum vel est. Curabitur in augue id risus consectetur tempus. Duis pharetra magna aliquam ipsum tempus luctus. Praesent at vulputate est.</p>

            </div>
          </div>

          <div className="movie-2 flex justify-center gap-3 w-[400px]">
            <div className="movie-image w-[200px] h-[300px] rounded overflow-hidden">
              <img src="https://picsum.photos/200/300" alt="First cover of movie" className="w-full h-full" />
            </div>
            <div className="movie-infos w-[200px] h-[300px] flex flex-col justify-between items-center p-2">
              <h2 className="font-bold text-white">Titre du Film.</h2>
              <p className="italic text-slate-500">John Doe</p>
              <div className="text-yellow-500 inline-flex justify-center items-center gap-2">3.4 <FaStar /></div>
              <p className="text-slate-300 text-xs text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at urna quis tortor convallis dictum. Nunc purus leo, sagittis non condimentum eget, dictum vel est. Curabitur in augue id risus consectetur tempus. Duis pharetra magna aliquam ipsum tempus luctus. Praesent at vulputate est.</p>

            </div>
          </div>
        </div>
      </div>
    </div >

    <footer className="text-center">
      <p>Copyright &copy; | Loick Cherimont 2024</p>
    </footer>
    {/* </section > */}
  </div >
}
