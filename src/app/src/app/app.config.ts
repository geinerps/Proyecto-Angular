import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
/*import { initializeApp } from 'firebase/app';*/
/*import { provideAuth } from '@angular/fire/auth';*/
import { getAuth, provideAuth  } from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const firebaseConfig = {
  apiKey: "AIzaSyDdGUZTVe6GEF4MexDqencnWabHE78iTnQ",
  authDomain: "angular-parcial1.firebaseapp.com",
  projectId: "angular-parcial1",
  storageBucket: "angular-parcial1.appspot.com",
  messagingSenderId: "185620376905",
  appId: "1:185620376905:web:e5828541a8f2139680be98"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideHttpClient(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth())
    ]), provideAnimationsAsync(),
  ],
};