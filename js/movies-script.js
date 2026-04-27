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

/*
Her opretter jeg en variabel, som peger på HTML-elementet
med id'et "movies-container".
Det er inde i denne container, at filmene skal vises.
*/
const moviesContainer = document.querySelector("#movies-container");

// Henter de HTML, vi skal arbejde med og gemmer dem i nogle variabler
const selectedCategory = document.querySelector("#category-select");
const searchInput = document.querySelector("#gsearch");
const form = document.querySelector("form");

function filterMovies() {
  // Henter den valgte periode (kategori) fra dropdown
  const selectedValue = selectedCategory.value;

  // Henter søge-teksten fra søgefeltet og laver indholdet om til små bogstaver og fjerne mellemrum før og efter søge-teksten
  const searchTerm = searchInput.value.toLowerCase().trim();

  // Vi starter med alle film fra listen (array - movies)
  let filteredMovies = movies;

  // Alle betyder alle perioder
  // Vi filtrerer kun hvis brugeren har valgt noget andet end "Alle"
  if (selectedValue != "Alle") {
    filteredMovies = filteredMovies.filter((item) => {
      return item.genre === selectedValue;
    });
  }
  if (searchTerm != "") {
    filteredMovies = filteredMovies.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm);
    });
  }
  displayMovies(filteredMovies);
}

// Sætter en lytter på variablen selectedCategory (dropdownmenuen), som lytter på om værdien i drop-down menuen ændrer sig
selectedCategory.addEventListener("change", filterMovies);

// Sætter en lytter på variablen searchInput (søgefeltet), som lytter på når der sker ændringer i søgefeltet
searchInput.addEventListener("input", filterMovies);

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Forhindrer standard formularindsendelse
  filterMovies();
});

let favoriteIds = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

function isFavorite(id) {
  return favoriteIds.includes(id);
}

function displayMovies(movieList) {
  moviesContainer.innerHTML += "";

  const html = movieList
    .map((movie) => {
      let star;

      if (isFavorite(movie.id)) {
        star = "★";
      } else {
        star = "☆";
      }

      return `  <article>
      <button class="favorite-btn" data-id="${movie.id}" aria-label="Vælg favorit">
        ${star}
      </button>
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
  moviesContainer.innerHTML = html;

  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const movieId = Number(button.dataset.id);
      toggleFavorite(movieId);
    });
  });
}

function toggleFavorite(id) {
  if (favoriteIds.includes(id)) {
    favoriteIds = favoriteIds.filter((favoriteId) => {
      return favoriteId !== id;
    });
  } else {
    favoriteIds.push(id);
  }

  localStorage.setItem("favoriteExhibitions", JSON.stringify(favoriteIds));

  displayMovies(movies);
}

displayMovies(movies);
