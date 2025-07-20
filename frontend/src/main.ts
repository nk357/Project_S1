
// main.ts
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { routes } from './app/app.routes';
// import { environment } from './environments/environment';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes),
//     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
//     provideAuth(() => getAuth()),
//   ]
// });
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes';

// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { environment } from './environments/environment';

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes),
//     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // ✅ THIS LINE
//     provideAuth(() => getAuth())
//   ]
// });

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { initializeApp } from 'firebase/app'; // ✅ from modular firebase
import { getAuth } from 'firebase/auth'; // ✅ same here
import { environment } from './environments/environment';

const app = initializeApp(environment.firebaseConfig); // ✅ create default app globally
const auth = getAuth(app); // ✅ optional if you want to export it later

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});

