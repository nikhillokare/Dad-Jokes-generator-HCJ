const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const apikey = "AEFyOYVQNtExPSwbZWitWA==vc3pe6UcQLCbkiRY";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey,
  },
};

const apiurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";
    const responce = await fetch(apiurl, options);
    const data = await responce.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "No Internet, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me A Joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
