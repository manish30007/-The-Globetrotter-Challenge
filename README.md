# The Globetrotter Challenge

## Overview

The Globetrotter Challenge is a full-stack web application designed using modern web technologies. It provides an interactive platform for users, leveraging a robust backend and a dynamic frontend to deliver a seamless user experience.

## Technologies Used

- **Backend:** Node.js v18 (Express.js)
- **Frontend:** Angular 19
- **Database:** Neo4j AuraDB
- **Styling:** HTML, CSS
- **Deployment:** Vercel

## Project Structure

```
TheGlobetrotterChallenge/
│── Backend/
│   ├── common/
│   │   ├── dbService.js
│   ├── controller/
│   │   ├── game.controller.js
│   │   ├── user.controller.js
│   ├── services/
│   │   ├── data.service.js
│   │   ├── game.service.js
│   │   ├── user.service.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   ├── .env
│   ├── .gitignore
│   ├── README.md
│   ├── vercel.json
│
│── Frontend/
│   ├── .angular/
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   │   ├── challenge/
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── app.component.html
│   │   │   ├── app.component.scss
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   ├── app.config.ts
│   │   │   ├── app.routes.ts
│   │   │   ├── destination.service.spec.ts
│   │   │   ├── destination.service.ts
│   │   │   ├── user.service.spec.ts
│   │   │   ├── user.service.ts
│   │   ├── assets/
│   │   ├── index.html
│   │   ├── main.ts
│   │   ├── styles.scss
│   ├── angular.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── vercel.json
│
│── .vscode/
│── node_modules/
```

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Node.js v18+
- Angular CLI
- Neo4j AuraDB instance setup

### Backend Setup

1. Navigate to the backend directory:
   ```sh
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables in `.env`.
4. Start the backend server:
   ```sh
   node server.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd Frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Serve the application:
   ```sh
   ng serve
   ```
4. Open the browser and navigate to `http://localhost:4200`.

## Deployment

Both the frontend and backend are deployed using **Vercel**. Ensure your `vercel.json` configurations are correctly set before deploying.

To deploy:

```sh
vercel deploy
```

## Contributing

Feel free to fork the repository, create a branch, and submit a pull request with improvements or fixes.

## License

This project is licensed under the MIT License.

---

Developed by **Manish30007**

