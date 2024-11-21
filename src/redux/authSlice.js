import { createSlice } from '@reduxjs/toolkit';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut, 
  sendPasswordResetEmail, 
  updateProfile 
} from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    logout(state) {
      state.user = null; // Clear user data
      state.error = null;
      state.loading = false;
    },
  },
});

export const { setLoading, setUser, setError, logout } = authSlice.actions;

// Custom error messages
const getCustomErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/email-already-in-use': 'This email is already registered. Please use a different email or log in.',
    'auth/invalid-email': 'The email address is not valid. Please enter a correct email address.',
    'auth/user-not-found': 'No account found with this email. Please check the email or sign up.',
    'auth/wrong-password': 'Incorrect password. Please try again or reset your password.',
    'auth/weak-password': 'The password is too weak. Please use at least 6 characters.',
    'auth/network-request-failed': 'A network error occurred. Please check your internet connection and try again.',
    'auth/too-many-requests': 'Too many unsuccessful login attempts. Please wait and try again later.',
  };

  return errorMessages[errorCode] || 'An unexpected error occurred. Please try again.';
};

// Function to fetch user data from Firestore
const fetchUserData = async (userId) => {
  const userRef = doc(db, "Users", userId);
  const userSnap = await getDoc(userRef);
  
  if (userSnap.exists()) {
    return userSnap.data(); // Return user data if it exists
  } else {
    throw new Error("No such document!"); // Handle error
  }
};

// Sign-Up
export const signUp = ({ firstName, lastName, email, password, phoneNumber }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "Users", userCredential.user.uid), {
      firstName,
      lastName,
      email,
      phoneNumber,
      role: "client",
      favorites: [], // Initialize as empty array
      reservations: [], // Initialize as empty array
    });
    
    const userData = await fetchUserData(userCredential.user.uid); // Fetch user data
    dispatch(setUser({ uid: userCredential.user.uid, ...userData })); // Set user data in Redux state

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Registered successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    const customError = getCustomErrorMessage(error.code);
    dispatch(setError(customError));
    Swal.fire({
      icon: "error",
      title: "Registration Failed",
      text: customError,
    });
  }
};

// Sign-In
export const signIn = ({ email, password }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userData = await fetchUserData(userCredential.user.uid);
    dispatch(setUser({ uid: userCredential.user.uid, ...userData })); // Set user data in Redux state

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logged in successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    const customError = getCustomErrorMessage(error.code);
    dispatch(setError(customError));
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: customError,
    });
  }
};

// Sign-Out
export const signOut = (navigate) => async (dispatch) => {
  try {
    await firebaseSignOut(auth);
    dispatch(logout());
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Logged out successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate('/register'); 
  } catch (error) {
    console.error('Error during sign-out:', error);
    Swal.fire({
      title: 'Error!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
    });
    dispatch(setError(error.message));
  }
};

// Reset Password
export const resetPassword = ({ email }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await sendPasswordResetEmail(auth, email);
    Swal.fire({
      icon: "success",
      title: "Password Reset Email Sent",
      text: "Please check your email to reset your password.",
    });
    dispatch(setUser(null)); // Optional: reset user state if needed
  } catch (error) {
    const customError = getCustomErrorMessage(error.code);
    dispatch(setError(customError));
    Swal.fire({
      icon: "error",
      title: "Reset Password Failed",
      text: customError,
    });
  }
};

// Add to Favorites
export const addToFavorites = (userId, roomId) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userRef = doc(db, "Users", userId);
    await updateDoc(userRef, {
      favorites: arrayUnion(roomId), // Add room ID to favorites array
    });
    const updateUserData = await fetchUserData(userId);
    dispatch(setUser({ uid: userId, ...updateUserData })); // Update user data in Redux
  } catch (error) {
    dispatch(setError(error.message)); // Handle error
  }
};

export default authSlice.reducer;
