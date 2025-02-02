document.addEventListener("DOMContentLoaded", () => {
  const movieDetails = JSON.parse(localStorage.getItem("selectedMovie"));
  if (!movieDetails) {
      alert("No movie data found!");
      window.location.href = "index.html"; 
      return;
  }

  const movieImage = document.getElementById("movie-image");
  const movieName = document.getElementById("movie-name");
  const movieDirector = document.getElementById("movie-director");
  const movieGenre = document.getElementById("movie-genre");
  const movieStory = document.getElementById("movie-story");
  const movieRating = document.getElementById("movie-rating");
  const movieStars = document.getElementById("movie-stars");
  
  const deleteButton = document.getElementById("delete-movie");
  const updateButton = document.getElementById("update-movie");
  
  const updatePopup = document.getElementById("update-popup");
  const closePopup = document.getElementById("close-popup");
  const saveUpdate = document.getElementById("save-update");

  movieImage.src = movieDetails.image;
  movieName.textContent = movieDetails.name;
  movieDirector.textContent = movieDetails.director;
  movieGenre.textContent = movieDetails.genre;
  movieStory.textContent = movieDetails.story;
  movieRating.textContent = movieDetails.rating;
  movieStars.textContent = movieDetails.stars ? movieDetails.stars.join(", ") : "N/A";

  deleteButton.addEventListener("click", () => {
      let movies = JSON.parse(localStorage.getItem("movies")) || [];
      movies = movies.filter(m => m.id !== movieDetails.id);
      localStorage.setItem("movies", JSON.stringify(movies));
      alert("Movie deleted!");
      window.location.href = "index.html";
  });

  updateButton.addEventListener("click", () => {
      document.getElementById("update-name").value = movieDetails.name;
      document.getElementById("update-director").value = movieDetails.director;
      document.getElementById("update-genre").value = movieDetails.genre;
      document.getElementById("update-story").value = movieDetails.story;
      document.getElementById("update-rating").value = movieDetails.rating;
      
      updatePopup.style.display = "flex"; 
  });

  closePopup.addEventListener("click", () => {
      updatePopup.style.display = "none";
  });

  saveUpdate.addEventListener("click", () => {
      const updatedMovie = {
          id: movieDetails.id,
          name: document.getElementById("update-name").value,
          director: document.getElementById("update-director").value,
          genre: document.getElementById("update-genre").value,
          story: document.getElementById("update-story").value,
          rating: document.getElementById("update-rating").value,
          image: movieDetails.image,
          stars: movieDetails.stars
      };

      let movies = JSON.parse(localStorage.getItem("movies")) || [];
      let index = movies.findIndex(m => m.id === movieDetails.id);
      if (index !== -1) {
          movies[index] = updatedMovie;
          localStorage.setItem("movies", JSON.stringify(movies));
          localStorage.setItem("selectedMovie", JSON.stringify(updatedMovie));
          alert("Movie updated!");
          window.location.reload();
      }
  });
});
