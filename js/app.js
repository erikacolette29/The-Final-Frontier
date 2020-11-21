const container = document.getElementById("containerDiv");
const container2 = document.getElementById("containerDiv2");

const planets = document.querySelectorAll(".planets");
const ship = document.getElementById("enterprise");
const borg = document.getElementById("borg");

const soundBtn = document.getElementById("sound-btn");
const darkBtn = document.getElementById("dark-btn");

const body = document.getElementById("body");

/*----------------------------- Event Listeners -----------------------------*/

document.querySelector(".planets-container").addEventListener("click", handleClick);

soundBtn.addEventListener("click", personClick);

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
/*-------------------------------- Functions --------------------------------*/
// Remove Button //
function myRemove() {
  container.style.display = "none";
}
function myRemove2() {
  container2.style.display = "none";
}

//   PLANETS API//
function handleClick(click) {
  let planet = click.target.id;
  console.log(planet);
  const planetsUrl = `https://api.le-systeme-solaire.net/rest/bodies/${planet}`;
  async function getPlanets() {
    const response = await fetch(planetsUrl);
    const data = await response.json();
    const { englishName, gravity, moons, density, escape } = data;

    document.getElementById("containerDiv").innerHTML = ` Captain's log,
       We passed by ${englishName} today, 
      with gravity strength of ${gravity}.
     We reported ${moons ? moons.length : 0} moons, and density of ${density}. 
     Our only route of escape
   was at a velocity of ${escape}
   <button id='remove' onclick="myRemove()">Close</button>

   `;
  }

  container.style.display = "block";
  getPlanets();
}

//ENTERPRISE Sound//

ship.addEventListener("click", (e) => {
  let audioVar = new Audio(`/sound/enterprise.mp3`);
  audioVar.play();
});

// Borg Sound //

borg.addEventListener("click", (e) => {
  let audio = new Audio(`/sound/borg.wav`);
  audio.play();
});

// Person //
function personClick(click) {
  let people = click.target.id;
  console.log(people);
  const peopleUrl = `http://api.open-notify.org/astros.json/`;
  async function peopleSpace() {
    const response = await fetch(peopleUrl);
    const data = await response.json();
    const { number, people } = data;
    let craft;
    people.map((c) => {
      console.log(c);
      craft = c.craft;
    });
    document.getElementById(
      "containerDiv2"
    ).innerHTML = ` Captain's Log, supplemental.
     We were thrown into a wormhole
      and time traveled back to the year 2020.
       Commander Data reported that as of this moment,
        there are only ${number} people in space aboard the ${craft}. 
        Knowing Earth's history, this is not a time 
        we wish to stay long in. 
        
        <button id='remove' onclick="myRemove2()">Close</button>
  `;
  }

  container2.style.display = "block";
  peopleSpace();
}