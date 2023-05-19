# Cypress-Automation project by Hassan Bhuiyan

# copy ssh key from your PC
pbcopy < ~/.ssh/id_rsa.pub

# Pre Condition to start the project
1. fire npm -i init ---> in your terminal to create package.json file
2. fire npm install cypress --save -dev --> to install cypress
3. npx cypress open OR node_modules/.bin/cypress open --> to start the cypress
5. Go to Support/commands.js file and add this --> /// <reference types ="Cypress" /> 

# Install Xpath
1. Install XPath Plugin using ==> npm install cypress-xpath
2. Add this line to e2e.js in support folder --> require('cypress-xpath')

