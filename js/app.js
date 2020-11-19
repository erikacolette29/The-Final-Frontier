/*-------------------------------- Constants --------------------------------*/
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  
  /*-------------------------------- Variables --------------------------------*/
  const info = [];
  const shipData = [];
  
  /*------------------------ Cached Element References ------------------------*/
  
  const planets = document.querySelectorAll(".planets");
  const ship = document.getElementById("enterprise");
  const soundBtn = document.getElementById("sound-btn");
  const darkBtn = document.getElementById("dark-btn");
  
  const container = document.getElementById("containerDiv");
  const body = document.getElementById("body");
  
  /*----------------------------- Event Listeners -----------------------------*/
  
  document
    .querySelector(".planets-container")
    .addEventListener("click", handleClick);
  
  ship.addEventListener("click", () => {});
  
  soundBtn.addEventListener("click", () => {});
  
  darkBtn.addEventListener("click", () => {});
  
  /*-------------------------------- Functions --------------------------------*/
  
  function handleClick(click) {
    let planet = click.target.id;
    console.log(planet);
    const planetsUrl = `https://api.le-systeme-solaire.net/rest/bodies/${planet}`;
    async function getPlanets() {
      const response = await fetch(planetsUrl);
      const data = await response.json();
      const { englishName, gravity, moons, density, escape } = data;
  
      document.getElementById("containerDiv").innerText = `
      Name: ${englishName}, 
      Gravity: ${gravity}, 
      Moons: ${moons ? moons.length : 0} , 
      Density: ${density},
      Escape: ${escape}`;
    }
    getPlanets();
  }
  