/*-------------------------------- Constants --------------------------------*/

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
    const { name, gravity, moons, density, escape } = data;

    document.getElementById("containerDiv").textContent = `
    Name: ${name}, 
    Gravity: ${gravity}, 
    Moons: ${moons}, 
    Density: ${density}, 
    Escape: ${escape}`;
  }
  getPlanets();

  // fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)
  // .then((response) =>{
  //   console.log(response)
  //     return response.json()
  // })
  // .then((data)=>{
  //    let gravity = data.gravity;
  //    let moons = data.moons;
  //    let mass = data.mass;
  //    let escape = data.escape;
  //     console.log(gravity, moons, mass, escape)
  //     render()
  // })
  // .catch((error)=>{
  //     console.log(error)
  // })
}

// function appendDiv(gravity, moons, mass, escape, idx) {
//     let newDiv = document.createElement('div')
// newDiv.innerHTML = `
//                             <div class="card h-100" id="${planet.toLowerCase()}">
//                                  <div class="card-body">
//                                     <blockquote class="blockquote mb-0">
//                                         <p>${gavity}</p>
//                                         <footer class="blockquote-footer">${planet}</footer>
//                                     </blockquote>
//                             </div>
//                              <button onClick-{deleteQuote(${idx})id="delButton" class="btn" onClick={deleteQuote(${idx})}>X</button>
//                                 </div> `

//     container.appendChild(newDiv)
// }

// function render(){
//     container.innerHTML = ""
//     info.forEach((inf, idx)=>{
//         appendDiv(info['info'], info['planet'], idx)
//     })
// }
