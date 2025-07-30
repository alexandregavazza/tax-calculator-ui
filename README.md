# TaxCalculator.UI

This is the Angular frontend application for the TaxCalculator project. It provides a simple UI to input a gross annual salary and displays the calculated tax results by calling the backend API.

---

## Features

- Input gross annual salary
- Call backend API to calculate tax
- Display gross annual salary, gross monthly salary, net annual salary, net monthly salary, annual tax paid and monthly tax paid
- Responsive and user-friendly interface

---

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [Angular CLI](https://angular.io/cli) installed globally (`npm install -g @angular/cli`)
- Backend API running and accessible (e.g., at `http://localhost:5001`)

---

## Setup and Run Locally

1. **Clone the repository**

   ```bash
   git clone <your-angular-repo-url>
   cd TaxCalculator.UI
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure API URL**

   Update the API URL in the service (usually in `src/app/environments/environment.ts`):

   ```typescript
   private apiUrl = 'https://localhost:5001/api/tax';
   ```

   Adjust the port or domain to match your backend API endpoint.

4. **RedisCache configuration**
   docker-compose up --build
   docker exec -it redis-cache redis-cli

5. **Run the app**

   ```bash
   ng serve
   ```

   The app will be available at [http://localhost:4200](http://localhost:4200).

---

## Building for Production

To build a production-ready bundle, run:

```bash
ng build --prod
```

The output will be in the `dist/` folder, which you can deploy to any static hosting.

---

## Testing

Run unit tests using:

```bash
ng test
```

This launches the Karma test runner.

---

## CORS Configuration

Make sure the backend API has CORS enabled for `http://localhost:4200` or your deployed frontend URL.

---

## Technologies Used

- Angular 16+
- TypeScript
- RxJS
- Angular Material (if used for UI components)
- HTTPClient for API calls

---

## Folder Structure

```
src/
├── app/
│   ├── app.ts    # Root module
│   ├── app.*  # Root component files
│   └── ...
├── environments/        # Environment config files
└── index.html           # Main HTML page
```

---

## Notes

- Update the API endpoint in the service if your backend runs on a different URL or port.
- If using Docker for frontend/backend, update URLs accordingly.
- You can extend the UI and services for more features or error handling.

---

Would you like me to generate Angular service or component files next?
