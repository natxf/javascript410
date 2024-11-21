const jokeButton = document.getElementById("jokeButton");

async function getJoke() {
  const url = "http://localhost:3001/jokebook/joke/funnyJoke";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed ");
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Failed");
  }
}

jokeButton.addEventListener("click", getJoke);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
