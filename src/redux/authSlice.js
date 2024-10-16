import { createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, getDoc, addDoc, collection, setDoc } from "firebase/firestore";

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

export const signUp = ({ firstName, lastName, email, password }) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "Users", userCredential.user.uid), {
      firstName,
      lastName,
      email,
      role: "client",
    });
    dispatch(setUser({ uid: userCredential.user.uid, email, firstName, lastName }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const resetPassword = ({ email }) => async (dispatch) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Please check email")
    dispatch(setUser());
  } catch (error) {
    console.error("Error sending password reset email:", error.message);
  }
};

export const signIn =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(setLoading());
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(
        setUser({
          uid: userCredential.user.uid,
          email: userCredential.user.email,
        })
      );
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
export default authSlice.reducer;




