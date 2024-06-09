# WorkZen Backend Favorites

Deze repository bevat de backend server voor het beheren van favoriete combinaties van muziek en visuals voor de WorkZen webapplicatie. De server is gebouwd met Node.js en Express en maakt verbinding met een MongoDB-database voor het opslaan en ophalen van favoriete combinaties.

## Inhoudstafel

- [WorkZen Backend Favorites](#workzen-backend-favorites)
  - [Inhoudstafel](#inhoudstafel)
  - [Getting Started](#getting-started)
  - [Features](#features)
  - [Usage](#usage)
    - [Een favoriete combinatie toevoegen](#een-favoriete-combinatie-toevoegen)
    - [Retrieving Favorite Combinations](#retrieving-favorite-combinations)
  - [Scripts en Dependencies](#scripts-en-dependencies)
    - [Scripts](#scripts)
  - [File Structure](#file-structure)
  - [Development](#development)
    - [De ontwikkelomgeving instellen](#de-ontwikkelomgeving-instellen)
  - [Gebruikte Scripts](#gebruikte-scripts)
  - [Bronnen die geholpen hebben voor het project](#bronnen-die-geholpen-hebben-voor-het-project)

## Getting Started

Volg deze stappen om aan de slag te gaan met de WorkZen Backend Favorites server:

    1. Clone de repository:

```bash
    git clone https://github.com/Mey-LinMus/backend-favorites-.git
    cd backend-favorites-
```

    2. Installeer dependencies:

```bash
    npm install
```

    3. Maak in de hoofddirectory een .env-bestand aan met de volgende inhoud:

```bash
    PORT=5000
    URL=your_mongodb_connection_string
```

    4. Start de server:

```bash
npm run start
```

De applicatie is beschikbaar op ´http://localhost:5000´.

## Features

- Favoriete combinaties toevoegen: Favoriete combinaties van muziek en visuals toevoegen voor een specifiek apparaat.
- Favoriete combinaties ophalen: Favoriete combinaties ophalen voor een specifiek apparaat.


## Usage

### Een favoriete combinatie toevoegen

Om een favoriete combinatie toe te voegen, stuur een POST request naar ´/favorites/:deviceId´ met volgende JSON body:

```json
{
  "favorite": {
    "visual": { /* visuele data */ },
    "tracks": [ /* lijst van tracks */ ]
  },
  "name": "Favorite Name"
}
```

### Retrieving Favorite Combinations

Om een favoriete combinatie voor een specifiek device, stuur een GET request naar ´/favorites/:deviceId´ 


## Scripts en Dependencies

Express: Een minimaal en flexibel Node.js webapplicatie framework.
MongoDB: MongoDB Node.js stuurprogramma om verbinding te maken met een MongoDB database.
Cors: Middleware voor het inschakelen van CORS (Cross-Origin Resource Sharing).
Dotenv: Module om omgevingsvariabelen uit een .env-bestand te laden.
Nodemon: Tool om de server automatisch opnieuw op te starten tijdens de ontwikkeling.


### Scripts

- Start: npm start - Runt de server gebruik makende van Node.js.
- Development: nodemon server.js - Runt de server gebruik makende van Nodemon voor automatische restarts tijdens de ontwikkeling.

## File Structure

- package.json - Project metadata and dependencies.
- server.js -  Hoofdserverbestand dat de Express-server en routes instelt.

## Development

### De ontwikkelomgeving instellen

1. Installeer Node.js and npm.
2. Clone de repository en ga naar de project map.
3. Installeer de nodige dependencies door gebruik te maken van ´npm install´.
4. Maak een .env-bestand aan met de vereiste omgevingsvariabelen.
5. Start the development server using npm run start.


## Gebruikte Scripts

**Nodemon**
Use the package manager [npm](https://www.npmjs.com/package/nodemon) to install nodemon.

```bash
npm i nodemon
```

**Express**
Use the package manager [npm](https://www.npmjs.com/package/express) to install express.

```bash
npm i express 
```

**Cors**
Use the package manager [npm](https://www.npmjs.com/package/cors) to install cors.

```bash
npm i cors 
```

**Body Parser**
Use the package manager [npm](https://www.npmjs.com/package/body-parser) to install body-parser.

```bash
npm i body-parser
```


## Bronnen die geholpen hebben voor het project

- Database: https://account.mongodb.com/account/login?n=https%3A%2F%2Fcloud.mongodb.com%2Fv2%2F665b7923bdea6c1a9ea38205&nextHash=%23security%2Fnetwork%2FaccessList&signedOut=true
