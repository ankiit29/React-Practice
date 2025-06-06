import React, { useState } from 'react'
import movies from './data.js'

const App2 = () => {
  const [data, setData] = useState(movies);

  const handleData = (category) => {
    if(category=="All"){
      setData(movies);
    }
    else{
      const newdata = movies.filter(movie => (movie.category == category))
      setData(newdata);
    }
  }
  return (
    <div>
      <div style={{
        display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px"
      }}>
        <button type="button" className="btn btn-outline-primary" onClick={()=>handleData("All")}>All</button>
        <button type="button" className="btn btn-outline-secondary" onClick={()=>handleData("Action")}>Action</button>
        <button type="button" className="btn btn-outline-success" onClick={()=>handleData("Thriller")}>Thriller</button>
        <button type="button" className="btn btn-outline-danger" onClick={()=>handleData("Animation")}>Animation</button>
        <button type="button" className="btn btn-outline-warning" onClick={()=>handleData("Horror")}>Horror</button>
        <button type="button" className="btn btn-outline-info" onClick={()=>handleData("Drama")}>Drama</button>
        <button type="button" className="btn btn-outline-dark" onClick={()=>handleData("Sci-Fi")}>Sci-Fi</button>
      </div>
      <div style={{
        display: "flex"
        , flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px"
      }}>
        {data.map((movie) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={movie.poster_path} className="card-img-top" alt="..." />
            <div className="card-body">
              <h1 className="card-text">{movie.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App2
