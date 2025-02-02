document.addEventListener("DOMContentLoaded", () => {
  const movieContainer = document.querySelector(".row");

  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  function renderMovies() {
      movieContainer.innerHTML = "";

      movies.forEach((movie, index) => {
          const col = document.createElement("div");
          col.classList.add("col");
          col.style.backgroundImage = `url('${movie.imagePath}')`;

          col.innerHTML = `
              <div class="rating">
                  <p class="rating-points">${movie.rating}</p>
                  <img src="assets/icons/star.png" alt="stars" class="star">
              </div>
              <p class="type">${movie.genre}</p>
              <h1 class="name">${movie.name}</h1>
          `;

          col.addEventListener("click", () => {
              localStorage.setItem("selectedMovie", JSON.stringify(movie));
              window.location.href = "details.html";
          });

          movieContainer.appendChild(col);
      });
  }

  renderMovies();
});
