import { useEffect, useState } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchlines,
      });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h2>Joker!</h2>
      <h3>{joke.setup}</h3>
      <h4>{joke.punchline}</h4>
      <button onClick={getNewJoke}>Get New Joke 🤣🤣</button>
    </div>
  );
}
