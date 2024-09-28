export async function getAllStarships(){
    //Obtain all of the starships from the API and render a card for each starship within <App>.
try {
    const starships = await fetch("https://swapi.dev/api/starships/")
    const json = await starships.json();
    return json
} catch(error) {
    console.error(error)
}
   
}