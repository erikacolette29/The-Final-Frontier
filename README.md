# Unit-1-Project
![Wireframe](css/Wireframe-solarsystem.png)
![wireframDrawing](css/wireframe.jpg)



# The Final Frontier 
This project is an interactive learning experience about the solar system. Click on a planet and learn some interesting information about it. Watch as the borg ship chases the Star Trek TNG ship around the solar system. 

[The Final Frontier](http://space-nerdy.surge.sh/)

## Mobile / Desktop Design Layout 

**HTML**
* Make the **HTML** template and link CSS, JS, fonts, & icons.
* Add section dividers for **planets** and **buttons**
* Add **H1** title, **planets container**, & **button container**.
* Assign classes & Ids to planets and buttons.
* Add two containers that will be displaying the **api** info
* Add buttons for sound and dark mode 
* Add containers for bottom and top border colors
* Add google fonts and bootstrap link 

**CSS** 
* Design layout and place planets on the page
* Add grid to body, _flex_ to container divs, assign colors, size, fonts, _adjust bootstrap_.
* Make **dark mode** button color options / display.
* Test layout responsive design 
* Add in **@media** to adjust the layout for desktop version.
* Add animation to planets and starship/borg ship
* Set keyframe animation to planets and ships
* Test mobile and desktop versions
* Set width, hight, and colors, to api container div

**JS**
* Add in layout dividers for **constants, variables, cached elements, event listeners, and functions** 
* **DOM** link the elements on HTML to js variables in cached element section 
* DOM link the buttons, body, and container of information 
* Add **click** event listeners to sound button, dark mode, and planets
* Make function to **remove** container boxes on click button.
* Make a handleClick function to target the planets on the page. Set the **API** url to a variable. Use the **async** function to set the response to a variable. Set the json response to a variable data. Use ternary operators to pick out the information wanted from the api and let it equal to the data. 
* In the handleClick function select the first container innerHTML text with ternary keys inside the sentence. 
* Add in remove button in innerHTML, add the display block to end of the function. Then call the getPlanets function. 
* Repeat same process for the second API. 
* Add function to check for color scheme and change dark mode
* Add sound buttons to a click event listener for the borg and starship. Make new audio sound for elements. 
* Test api call, audio, dark mode button 
* Test responsive layout and make sure everything functions.


## Attributions ##
I would like to make a disclaimer and thank all these resources for making my site possible. These are not my sounds, icons, or fonts and no changes were made. 

Sounds are from [freesound.org](https://freesound.org/)
Title: "Scotty Star Fleet.mp3"
Author: celldroid.
Source: [freesound.org](https://freesound.org/people/celldroid/sounds/134942/)
License: [license](https://creativecommons.org/licenses/by-nc/3.0/legalcode) - Attribution-NonCommercial 3.0 Unported.

Title: "Borg Voices"
Author: miked312
Souce: [freesound.org](https://freesound.org/people/miked312/sounds/243601/)
License: [license](https://creativecommons.org/licenses/by-nc/3.0/legalcode) -Attribution-NonCommercial 3.0 Unported.

(NOTE: Star Trek and all its holdings belong to Paramount/CBS and its affiliates; do not use this recording for commercial purposes!)

Fonts are from [googleFonts](https://fonts.google.com/specimen/Poiret+One?query=poire).
License: [license](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL)

Icons:
Title: Moon
Source: [fontawesome.com](https://fontawesome.com/icons/moon?style=solid)
License: [License](https://fontawesome.com/license#what-the-customer-may-do)

Title: user-astronaut 
Source: [fontawesome.com](https://fontawesome.com/icons/user-astronaut?style=solid)
License: [License](https://fontawesome.com/license#what-the-customer-may-do)