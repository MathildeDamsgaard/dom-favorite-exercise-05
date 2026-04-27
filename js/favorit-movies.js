"use strict";

const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Science Fiction",
    year: "2010",
    duration: "2.28",
    img: "img/inception.webp",
    url: "https://www.example.com/inception",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    year: "2008",
    duration: "2.32",
    img: "img/the-dark-knight.webp",
    url: "https://www.example.com/the-dark-knight",
  },
  {
    id: 3,
    title: "Forrest Gump",
    genre: "Drama",
    year: "1994",
    duration: "2.22",
    img: "img/forrest-gump.webp",
    url: "https://www.example.com/forrest-gump",
  },
  {
    id: 4,
    title: "Superbad",
    genre: "Comedy",
    year: "2007",
    duration: "1.53",
    img: "img/superbad.webp",
    url: "https://www.example.com/superbad",
  },
  {
    id: 5,
    title: "It",
    genre: "Horror",
    year: "2017",
    duration: "2.15",
    img: "img/it.webp",
    url: "https://www.example.com/it",
  },
  {
    id: 6,
    title: "The Hangover",
    genre: "Comedy",
    year: "2009",
    duration: "1.4",
    img: "img/the-hangover.webp",
    url: "https://www.example.com/the-hangover",
  },
  {
    id: 7,
    title: "The Conjuring",
    genre: "Horror",
    year: "2013",
    duration: "1.52",
    img: "img/the-conjuring.webp",
    url: "https://www.example.com/the-conjuring",
  },
  {
    id: 8,
    title: "Interstellar",
    genre: "Science Fiction",
    year: "2014",
    duration: "2.49",
    img: "img/interstellar.webp",
    url: "https://www.example.com/interstellar",
  },
  {
    id: 9,
    title: "The Matrix",
    genre: "Science Fiction",
    year: "1999",
    duration: "2.16",
    img: "img/the-matrix.webp",
    url: "https://www.example.com/the-matrix",
  },
  {
    id: 10,
    title: "Pulp Fiction",
    genre: "Drama",
    year: "1999",
    duration: "2.19",
    img: "img/pulp-fiction.webp",
    url: "https://www.example.com/pulp-fiction",
  },
];

const favoritesContainer = document.querySelector("#favorites-container");

let favoriteIds = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

const favoriteMovies = movies.filter((item) => {
  return favoriteIds.includes(item.id);
});

function displayMovies(movieList) {
  if (movieList.length === 0) {
    favoritesContainer.innerHTML =
      "<p> Du har endnu ikke valgt nogen favoritudstillinger </p>";
    return;
  } // Her slutter if-sætningen

  const html = movieList
    .map((movie) => {
      // Her skal jeg indsætte noget JS kode
      return `  <article>
      <h2>${movie.title}</h2>
      <ul>
        <li>Genre: ${movie.genre}</li>
        <li>År: ${movie.year}</li>
        <li>Varighed: ${movie.duration} h</li>
      </ul>
      <figure>
        <a href="${movie.url}" target="_blank" rel="noopener noreferrer"><img src="${movie.img}" alt="${movie.title}"></a>
      <figcaption>${movie.title}</figcaption></figure>
    </article>`;
    })
    .join("");

  favoritesContainer.innerHTML = html;
} // Her slutter funktionen

displayMovies(favoriteMovies);
