const loadMovies = async() => {

    try {
        const reply = await fetch('https://api.themoviedb.org/3/movie/550?api_key=ab0cc0be875ab4a13dd8a3f623f506f5&language=en-US');

    console.log(reply);
    } catch(error) { 
        console.log(error);
    }
}

loadMovies();