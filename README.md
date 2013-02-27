dots_prototype
==============

Prototype of a Boxes &amp; Dots game server... in Node.js!


usage
=====

First, make sure you have node.js and npm installed. Then:

  git clone https://github.com/rnubel/dots_prototype
  cd dots_prototype
  npm install
  
  node app.js

Then you can do stuff like:

  curl http://localhost:3000/matches/create
  curl http://localhost:3000/matches/asdf9sdjf091000001
  curl http://localhost:3000/matches/asdf9sdjf091000001/line/1/2/bottom # draw a line on the bottom of cell 1,2

