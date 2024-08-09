const poke = document.getElementById("poke");
const fecthpoke = async () => {
  for (let i = 1; i <= 250; i++) {
    await getpoke(i);
  }
};
const getpoke = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  const pokemon = document.createElement("div");
  pokemon.classList.add("pokemon");
  const name = result.name[0].toUpperCase() + result.name.slice(1);
  const type =
    result.types[0].type.name[0].toUpperCase() +
    result.types[0].type.name.slice(1);
  const pokehtml = `
        <div class="img">
            <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${result.id}.svg" alt="${name}" />
        </div>
        <div class="info">
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

  pokemon.innerHTML = pokehtml;
  poke.appendChild(pokemon);
};

fecthpoke();
