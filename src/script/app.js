// api key  from TMDB
const api = "api_key=9c01bc51e3095c9d889d05989bec36d1";
// base url of the site
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url
const img_url = "https://image.tmdb.org/t/p/original";

// requests for movies data
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchVoilaPourVous: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
};
// used to trim the string
function trim(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);
    // every refresh the movie will be change
    const setMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log("banner", setMovie);
    var banner = document.getElementById("banner");
    var banner_title = document.querySelector("#banner__title");
    var banner__desc = document.querySelector("#banner__descriptions");
    banner.style.backgroundImage =
      "url(" + img_url + setMovie.backdrop_path + ")";
    banner__desc.innerText = trim(setMovie.overview, 150);
    banner_title.innerText = setMovie.original_title || setMovie.original_name;
  });

//movies rows
fetch(requests.fetchVoilaPourVous)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("netflixrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Voila Pour Vous";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster_container = document.createElement("div");
      poster_container.setAttribute("class", "row__posterContainer");
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      poster.src = img_url + movie.poster_path;
      const overview = document.createElement("p");
      overview.setAttribute("class", "poster__overview");
      overview.textContent = trim(movie.overview, 150);
      poster_container.appendChild(poster);
      poster_container.appendChild(overview);
      row_posters.appendChild(poster_container);
    });
  });

//trending
fetch(requests.fetchPopular)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    row.classList.add("popularrow");
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Trending Now";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";

    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster_container = document.createElement("div");
      poster_container.setAttribute("class", "row__posterContainer");
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      poster.src = img_url + movie.poster_path;
      const overview = document.createElement("p");
      overview.setAttribute("class", "poster__overview");
      overview.textContent = trim(movie.overview, 150);
      poster_container.appendChild(poster);
      poster_container.appendChild(overview);
      row_posters.appendChild(poster_container);
    });
  });

// top rated
fetch(requests.fetchTrending)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Top Rated";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster_container = document.createElement("div");
      poster_container.setAttribute("class", "row__posterContainer");
      //console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__posterLarge";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.poster_path;
      const overview = document.createElement("p");
      overview.setAttribute("class", "poster__overview");
      overview.textContent = trim(movie.overview, 150);
      poster_container.appendChild(poster);
      poster_container.appendChild(overview);
      row_posters.appendChild(poster_container);
    });
  });

// action
fetch(requests.fetchActionMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Action Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster_container = document.createElement("div");
      poster_container.setAttribute("class", "row__posterContainer");
      //console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      const overview = document.createElement("p");
      overview.setAttribute("class", "poster__overview");
      overview.textContent = trim(movie.overview, 150);
      poster_container.appendChild(poster);
      poster_container.appendChild(overview);
      row_posters.appendChild(poster_container);
    });
  });
// comedy
fetch(requests.fetchComedyMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Comedy Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster_container = document.createElement("div");
      poster_container.setAttribute("class", "row__posterContainer");
      //console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      const overview = document.createElement("p");
      overview.setAttribute("class", "poster__overview");
      overview.textContent = trim(movie.overview, 150);
      poster_container.appendChild(poster);
      poster_container.appendChild(overview);
      row_posters.appendChild(poster_container);
    });
  });
// Horror
fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Horror Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster_container = document.createElement("div");
      poster_container.setAttribute("class", "row__posterContainer");
      //console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      const overview = document.createElement("p");
      overview.setAttribute("class", "poster__overview");
      overview.textContent = trim(movie.overview, 150);
      poster_container.appendChild(poster);
      poster_container.appendChild(overview);
      row_posters.appendChild(poster_container);
    });
  });
// Romance
fetch(requests.fetchRomanceMovies)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Romance Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster_container = document.createElement("div");
      poster_container.setAttribute("class", "row__posterContainer");
      //console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      const overview = document.createElement("p");
      overview.setAttribute("class", "poster__overview");
      overview.textContent = trim(movie.overview, 150);
      poster_container.appendChild(poster);
      poster_container.appendChild(overview);
      row_posters.appendChild(poster_container);
    });
  });
// documentry
fetch(requests.fetchDocumentaries)
  .then((res) => res.json())
  .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Documentaries";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) => {
      const poster_container = document.createElement("div");
      poster_container.setAttribute("class", "row__posterContainer");
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__poster";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      const overview = document.createElement("p");
      overview.setAttribute("class", "poster__overview");
      overview.textContent = trim(movie.overview, 150);
      poster_container.appendChild(poster);
      poster_container.appendChild(overview);
      row_posters.appendChild(poster_container);
    });
  });
