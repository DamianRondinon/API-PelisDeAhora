
let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");


btnSiguiente.addEventListener('click', () => {
    if(pagina < 10)
    pagina += 1;
    loadMovies();

});

btnAnterior.addEventListener('click', () => {
    if(pagina > 1)
    pagina -= 1;
    loadMovies();

});

const loadMovies = async () => {
  try {
    const reply = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ab0cc0be875ab4a13dd8a3f623f506f5&language=en-US&page=${pagina}`
    );

    if (reply.status === 200) {
      const data = await reply.json();

      let movies = "";
      data.results.forEach((movie) => {
        movies += `
        <div class="movie">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
        <h3 class="titulo">${movie.title}</h3>
        </div>
        `;
      });

      document.getElementById("contenedor").innerHTML = movies;
    } else if (reply.status === 401) {
      console.log("there is a key error");
    } else if (reply.status === 404) {
      console.log("the movie you are looking for does not exist");
    } else {
      console.log("error unknown, check sources");
    }
  } catch (error) {
  }
};

loadMovies();
