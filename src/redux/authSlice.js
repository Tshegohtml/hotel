import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";

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
  },
});

export const { setLoading, setUser, setError } = authSlice.actions;

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
    dispatch(setUser({ uid: userCredential.user.uid, ...userData })); 
    console.log(userData)// Set user data in Redux state
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const resetPassword = ({ email }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Please check your email.");
    dispatch(setUser(null)); // Optional: reset user state if needed
  } catch (error) {
    dispatch(setError(error.message)); // Handle error
    console.error("Error sending password reset email:", error.message);
  }
};

export const signIn = ({ email, password }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userData = await fetchUserData(userCredential.user.uid);
    console.log("User data retrieved:", userData);
    dispatch(setUser({ uid: userCredential.user.uid, ...userData })); // Set user data in Redux state
  } catch (error) {
    console.error("Login error:", error); // Log the full error object
    dispatch(setError(error.message));
  }
};


// Function to add a room ID to favorites
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

// Function to add a room ID to reservations
export const addToReservations = (userId, roomId) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userRef = doc(db, "Users", userId);
    await updateDoc(userRef, {
      reservations: arrayUnion(roomId), // Add room ID to reservations array
    });
    const updateUserData = await fetchUserData(userId);
    dispatch(setUser({ uid: userId, ...updateUserData })); // Update user data in Redux
  } catch (error) {
    dispatch(setError(error.message)); // Handle error
  }
};

export default authSlice.reducer;
