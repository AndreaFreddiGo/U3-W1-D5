const SingleMovie = (props) => {
  return (
    <>
      {props.array.map((movie) => (
        <div className="col-6 col-md-3 col-lg-2 px-1" key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} className="w-100 h-100" />
        </div>
      ))}
    </>
  )
}

export default SingleMovie
