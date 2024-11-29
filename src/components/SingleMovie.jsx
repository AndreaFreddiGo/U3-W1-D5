const SingleMovie = (props) => {
  return (
    <div className="col-6 col-md-3 col-lg-2 px-1">
      <img src={props.Poster} className="w-100" />
    </div>
  )
}

export default SingleMovie
