import { movies } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const starInput = document.getElementById("stars");
  let stars = [];
  let movieId = 0;
  let imagePath = "";

  document.getElementById("add-button").addEventListener("click", () => {
    const star = starInput.value.trim();
    if (star) {
      stars.push(star);
      starInput.value = "";
      alert(`Star added: ${star}`);
    }
  });

  const pic = document.getElementById("photo");
  pic.addEventListener("change", function () {
    if (pic.files.length > 0) {
      const file = pic.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        imagePath = e.target.result;
        alert("Image uploaded successfully!");
      };

      reader.readAsDataURL(file);
    } else {
      alert("Upload a picture");
    }
  });

  document.getElementById("sub").addEventListener("click", () => {
    const Name = document.getElementById("name").value.trim();
    const director = document.getElementById("director").value.trim();
    const story = document.getElementById("story").value.trim();
    const movieType = document.getElementById("movie-type").value.trim();
    const movieRating = document.getElementById("rating").value;

    if (!Name || !director || !story || !movieType || !imagePath ||!movieRating) {
      alert("Fill up all necessary information and upload an image");
      return;
    }

    movieId++;
    const newMovie = {
      id: movieId,
      name: Name,
      director,
      story,
      rating: movieRating,
      movieType,
      stars,
      image: imagePath,
    };

    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
    console.log(movies);

    alert("Movie added successfully!");

    document.getElementById("name").value = "";
    document.getElementById("director").value = "";
    document.getElementById("story").value = "";
    document.getElementById("movie-type").value = "";
    stars = [];
    imagePath = "";
  });
});
