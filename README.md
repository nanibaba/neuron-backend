# Neuron Backend Download/Installation Guide

## Download Node JS and Yarn  

1. Download Node JS (https://nodejs.org/en/). 
The LTS version is recommended because the Current one is 
in development and is unstable.

It is recommended to install all tools coming with Node,
unless you already have them installed. 

2. From the command prompt (on Windows, type cmd in the search bar and look for Command Prompt), type the following and hit enter: 

```bash
npm install --global yarn
```
This will install Yarn, the package manager 
used by this project. The --global flag installs 
it as a global dependency in the root folder of your machine.

3. Check your installations from the command prompt. 
Type and hit enter:

a) 
```bash
node -v 
```
b) 
```bash
yarn -v 
```

You should see v16.16.0 (latest LTS) for Node and 
1.22.19 (latest) for Yarn

## Clone/download the repository

In Github, click on the Code option 
and choose your preferred download method

a) For developement (recommended): 

Clone the repository using Git (https://git-scm.com/downloads)

b) For regular viewing: 

Download ZIP, then extract all in a folder of choice

## Install the dependencies

From the command prompt, type and hit enter:

a) In case of cloning with Git: 
```bash
cd <repository-folder>/neuron-backend 
```

Example: 
```bash
cd VSCodeProjects/neuron-backend
```

b) In case of regular download:

```bash
cd <repository-folder>/<neuron-backend-branch>/<neuron-backend-branch>
```

Example: 
```bash
cd downloads/neuron-backend-master/neuron-backend-master
```

Then, type and hit enter:
```bash
yarn
```

## Start the project in production mode (recommended for viewing the stable version)

From the command prompt, type and hit enter:
```bash 
yarn start
```
Then, follow the specified link (e.g. http://localhost:3000)

## Start the project in development mode (recommended for making changes/additions)

From the command prompt, type and hit enter:
```bash 
yarn dev
```
Then, follow the specified link (e.g. http://localhost:3000)

### If you see the Swagger OpenAPI UI, you have successfully started the application!
