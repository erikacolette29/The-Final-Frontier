/*-------------------------------- Constants --------------------------------*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  
  /*-------------------------------- Variables --------------------------------*/
  
  
  /*------------------------ Cached Element References ------------------------*/
  
  const planets = document.querySelectorAll(".planets");
  const ship = document.getElementById("enterprise");
  const soundBtn = document.getElementById("sound-btn");
  const darkBtn = document.getElementById("dark-btn");
  
  const container = document.getElementById("containerDiv");
  const body = document.getElementById("body");

  const borg = document.getElementById('borg')

 
  
  /*----------------------------- Event Listeners -----------------------------*/
  
  document.querySelector(".planets-container").addEventListener("click", handleClick);


soundBtn.addEventListener('click', personClick)

  
  /*-------------------------------- Functions --------------------------------*/
  
//   PLANETS INFO //
  function handleClick(click) {
    let planet = click.target.id;
    console.log(planet);
    const planetsUrl = `https://api.le-systeme-solaire.net/rest/bodies/${planet}`;
    async function getPlanets() {
      const response = await fetch(planetsUrl);
      const data = await response.json();
      const { englishName, gravity, moons, density, escape } = data;
  
      document.getElementById("containerDiv").innerText = ` Captain's log, Stardate 43125.8.
       We passed by ${englishName} today, 
      with gravity strength of ${gravity}.
     We reported ${moons ? moons.length : 0} moons, and density of ${density}. 
     Our only route of escape
     was at a velocity of ${escape}`;
    }
    getPlanets();
  }
  
//ENTERPRISE //

  ship.addEventListener('click', (e) =>{
      let audioVar = new Audio(`/sound/enterprise.mp3`)
      audioVar.play()
  })

//   BorgShip //

borg.addEventListener('click', (e) =>{
    let audio = new Audio(`/sound/borg.wav`)
    audio.play()
})

// Person //
function personClick(click) {
  let people = click.target.id;
  console.log(people);
  const peopleUrl = `http://api.open-notify.org/astros.json/`;
  async function peopleSpace() {
    const response = await fetch(peopleUrl);
    const data = await response.json();
    const {number, people} = data;
    let craft;
    people.map((c)=>{
      console.log(c)
    craft = c.craft
    })
    document.getElementById("containerDiv2").innerText = `
   People in Space: ${number}, 
   Spacecraft: ${craft}, 

  `}
 peopleSpace();
}



