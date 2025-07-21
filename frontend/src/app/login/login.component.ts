// src/app/login/login.ts
// login.component.ts

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './login.html',
//   styleUrls: ['./login.css']
// })
// export class LoginComponent {
//   loginWithGoogle() {
//     console.log("🔍 Button clicked");
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//       .then(result => {
//         console.log("✅ Logged in as:", result.user.displayName);
//       })
//       .catch(error => {
//         console.error("❌ Login error:", error);
//       });
//   }
// }
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// @Component({
//   standalone: true,
//   selector: 'app-login',
//   imports: [CommonModule],
//   templateUrl: './login.html',
//   styleUrls: ['./login.css']
// })
// export class LoginComponent {
//   loginWithGoogle() {
//     console.log("🔍 Button clicked");

//     const auth = getAuth(); // ✅ Now this will work
//     const provider = new GoogleAuthProvider();

//     signInWithPopup(auth, provider)
//       .then(result => {
//         console.log("✅ Logged in as:", result.user.displayName);
//       })
//       .catch(error => {
//         console.error("❌ Login error:", error);
//       });
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  // loginWithGoogle() {
  //   console.log("🔍 Button clicked");

  //   const auth = getAuth(); // ✅ now this will NOT throw error
  //   const provider = new GoogleAuthProvider();

  //   // signInWithPopup(auth, provider)
  //   //   .then(result => {
  //   //     console.log("✅ Logged in as:", result.user.displayName);
  //   //   })
  //   //   .catch(error => {
  //   //     console.error("❌ Login error:", error);
  //   //   });
  //   signInWithPopup(auth, provider)
  //     .then(result => {
  //       const name = result.user?.displayName || 'User';
  //       alert(`🎉 Welcome, ${name}!`);
  //       this.router.navigateByUrl('/dashboard'); // ✅ redirect
  //     })
  //     .catch(error => {
  //       console.error("❌ Login error:", error);
  //       alert("Login failed. Please try again.");
  //     });
  // }
  /**
  loginWithGoogle() {
  console.log("🔍 Button clicked");

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  provider.addScope('https://www.googleapis.com/auth/documents');
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  // ✅ Force prompt every time
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  signInWithPopup(auth, provider)
    .then(result => {
      console.log("✅ Logged in as:", result.user?.displayName);
      alert(`🎉 Welcome, ${result.user?.displayName}`);
      this.router.navigateByUrl('/dashboard');
    })
    .catch(error => {
      console.error("❌ Login error:", error);
    });
}
     */
loginWithGoogle() {
  console.log("🔍 Button clicked");

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Add Google Docs scope (or any other needed scope)
  provider.addScope('https://www.googleapis.com/auth/documents');      // Google Docs
  provider.addScope('https://www.googleapis.com/auth/presentations');  // Google Slides
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  signInWithPopup(auth, provider)
    .then(result => {
      // Get OAuth access token
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("OAuth Access Token:", token);

      // Save user info and token if needed
      const user = {
        name: result.user?.displayName,
        email: result.user?.email,
        token: token
      };
      localStorage.setItem('user', JSON.stringify(user));

      alert(`🎉 Welcome, ${user.name}`);
      this.router.navigateByUrl('/dashboard');
    })
    .catch(error => {
      console.error("❌ Login error:", error);
    });
}

onLoginSuccess(user: any) {
  // Save user data (see step 2)
  localStorage.setItem('user', JSON.stringify(user));
  this.router.navigate(['/dashboard']);
}
}