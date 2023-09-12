export const filterByName = (movies, search) => {
  return movies.filter(movie => (
    movie.nameRU.toLowerCase().includes(search.toLowerCase()) ||
    movie.nameEN.toLowerCase().includes(search.toLowerCase())
  ))
}

export const filterByDuration = (movies, isShort) => {
  return movies.filter(movie => (
    isShort ? movie.duration <= 40 : movie
  ))
}
