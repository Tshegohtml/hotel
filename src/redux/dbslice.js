import { createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { async } from "@firebase/util";

import Swal from 'sweetalert2';


const initialState = {
  data: [],
  loading: false,
  error: null,
  reviews :[]
};
export const dbSlice = createSlice({
  name: "db",
  initialState,
  reducers: {
    setLoading(state) {
      state.loading = true;
      state.error = null;
    },
    setData(state, action) {
      state.data = action.payload;
      state.loading = false;
    },

    setReviews(state, action) {
      state.reviews = action.payload;
      state.loading = false;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    addBookingToState(state, action) {
      state.data.push(action.payload);
      state.loading = false;
    },
    setReview(state, action) {
      state.data.push(action.payload);
      state.loading = false;
    },
    addRoomToState(state, action) {
      state.data.push(action.payload);
      state.loading = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { setLoading, setData, setError, addBookingToState, addRoomToState } = dbSlice.actions;
export default dbSlice.reducer;

export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "Rooms"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const addBookings = (bookingData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const docRef = await addDoc(collection(db, "bookings"), bookingData);
    console.log("Document written with ID: ", docRef.id);
    dispatch(addBookingToState({ id: docRef.id, ...bookingData }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getBookings = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "bookings"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};


export const addReviews = (reviewData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const docRef = await addDoc(collection(db, "Reviews"), reviewData);
    console.log("Document written with ID: ", docRef.id);
   // dispatch(setData({ id: docRef.id, ...reviewData }));

   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Registered successfully",
    showConfirmButton: false,
    timer: 1500,
  });
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const getReviews = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const querySnapshot = await getDocs(collection(db, "Reviews"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setData(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const addRooms = (roomData) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const docRef = await addDoc(collection(db, "Rooms"), roomData);
    console.log("Room added with ID: ", docRef.id);
    dispatch(addRoomToState({ id: docRef.id, ...roomData }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};