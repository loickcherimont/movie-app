export default function App() {
  return <div className="bg-black text-white text-center">
    <section className="section">
      {/* HEADER */}
      <header className="header h-16 border border-white flex justify-center items-center">
        <span><a href="#">LOGO</a></span>
      </header>

      {/* HERO */}
      <div>
        {/* Hero Texts */}
        <div>
          <h1>Hero title</h1>
          <p>This is a simple paragraph</p>
        </div>

        {/* Where user ca search his movies */}
        <form>
          <label>Search Your Movie</label>
          <input type="text" placeholder="Aladdin, ..." className="block placeholder:italic"/>
        </form>

        <div>
          {/* Where results for the query appear */}
        </div>
      </div>
    </section>
  </div>
}
