// Add JS here

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlMe4P9QrAJ2KdG9xPLqd_BBJj3A3y_2w",
 authDomain: "mindease-app-5b8eb.firebaseapp.com",
    projectId: "mindease-app-5b8eb",
 storageBucket: "mindease-app-5b8eb.firebasestorage.app",
    messagingSenderId: "456991726867",
 appId: "1:456991726867:web:9254ffe3e8daae3f148ee6",
    measurementId: "G-8F9E9NP8SC",
    databaseURL: "https://mindease-app-5b8eb-default-rtdb.firebaseio.com/"
  };

     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();
 
     function register() {
 try {
 const email = document.getElementById("registerEmail").value;
 const password = document.getElementById("registerPassword").value;

 // Log email and password to the console
 console.log("Register Email:", email);
 console.log("Register Password:", password);
 // You would typically add Firebase authentication registration code here
 } catch (error) {
 console.error("Registration Error:", error.message);
 }
     }
 
     function login() {
       const email = document.getElementById("loginEmail").value;
       const password = document.getElementById("loginPassword").value;

       auth.signInWithEmailAndPassword(email, password)
         .then((userCredential) => {
           alert("Login successful: " + userCredential.user.email);
         })
         .catch((error) => {
           alert("Login Error: " + error.message);
 // Log the error to the console for debugging
 console.error("Login Error:", error);
         });
     }
 
     function logout() {
       auth.signOut()
         .then(() => {
           alert("Logged out successfully.");
         })
         .catch((error) => {
           alert("Logout Error: " + error.message);
 // Log the error to the console for debugging
 console.error("Logout Error:", error);
         });
     }
 
     auth.onAuthStateChanged((user) => {
       const status = document.getElementById("userStatus");
       if (user) {
         status.textContent = "Logged in as: " + user.email;
       } else {
         status.textContent = "Not logged in.";
       }
     });

  //Logout function
  function deleteAccount() {
  const user = auth.currentUser;
  
  if (user) {
    const confirmDelete = confirm("Are you sure you want to permanently delete your account?");
    if (!confirmDelete) return;
  
    user.delete()
      .then(() => {
        alert("Your account has been deleted.");
      })
      .catch((error) => {
        // If the user recently signed in, deletion may require re-authentication
        alert("Delete Error: " + error.message);
 // Log the error to the console for debugging
 console.error("Delete Error:", error);
        if (error.code === 'auth/requires-recent-login') {
          alert("You must re-login before deleting your account for security reasons.");
        }
      });
  } else {
    alert("No user is currently logged in.");
  }
}
