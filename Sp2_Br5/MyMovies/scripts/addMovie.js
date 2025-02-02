import { movies } from "./data.js";

document.addEventListener('DOMContentLoaded', () => {
  const Name = document.getElementById('name');
  const director = document.getElementById('director');
  const story = document.getElementById('story');
  const movieType = document.getElementById('movie-type');
  const starInput = document.getElementById('stars');
  const pic = document.getElementById('photo');
  const addStarButton = document.getElementById('add-button');

  let stars = [];
  let recipeId = 0;

  addStarButton.addEventListener('click', () => {
      const star = starInput.value.trim();
      if (star) {
          stars.push(star);
          starInput.value = '';
          alert(`Star added: ${star}`);
      }
  });

})
