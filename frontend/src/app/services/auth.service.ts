import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment'; // Adjust path if needed

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = getAuth();

  constructor() {
    initializeApp(environment.firebaseConfig);
  }

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/drive.file'); // Request Drive scope
    provider.setCustomParameters({ prompt: 'consent' });

    try {
      const result = await signInWithPopup(this.auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      const user = result.user;

      console.log('✅ User Email:', user.email);
      console.log('🔑 Access Token:', accessToken);

      return { user, accessToken };
    } catch (err) {
      console.error('❌ Google Sign-in Error:', err);
      throw err;
    }
  }
}
