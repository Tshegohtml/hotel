import { createSlice } from "@reduxjs/toolkit";
import {doc,setDoc,addDoc,collection,getDocs,deleteDoc} from "firebase/firestore"
import { db } from "../config/firebase";

const initialState={
    data:[],
    loading:false,
    error:null
}
export const AdminSlice=createSlice({
    name:"admin",
    initialState,
    reducers:{
        setLoading(state){
            state.loading=true;
            state.error=null;
        },
        setError(state,action){
            state.error=action.payload;
            state.loading=false;
        },
        setData(state,action){
            state.data=action.payload;
            state.loading=false;
        }
    }
})
export const { setLoading, setData, setError } = AdminSlice.actions
export default AdminSlice.reducer
export const fetchDataFirestore=async(dispatch)=>{
    dispatch(setLoading())
    try{
        const docSnap = await getDocs(collection(db,"Bookings"));
        if (docSnap.docs.length>0) {
            const data=docSnap.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }));
            dispatch(setData(data));
          console.log("Document data:", docSnap.docs);
        } else {
          console.log("No such document!");
        }
    }
    catch(error){
        dispatch(setError(error.message));
    }
  }
  export const AddToFireStore=async (room,dispatch)=>{
    dispatch(setLoading())
    try{
        console.log("Rooms are:",{
            "Firstname": room.Firstname,
            "Lastname": room.Lastname,
            "Price": room.Price,
            "roomCheckIn": room.roomCheckIn,
            "roomCheckOut": room.roomCheckOut,
            "specialRequests": room.specialRequests,
            "roomType": room.roomType,
            "Paid": "Yes",
            "Number": room.Number,
            "Email": room.Email,
            })
        await addDoc(collection(db, "Bookings"), {
            "Firstname": room.Firstname,
            "Lastname": room.Lastname,
            "Price": room.Price,
            "roomCheckIn": {"formattedDate":room.roomCheckIn},
            "roomCheckOut": {"formattedDate":room.roomCheckOut},
            "specialRequests": room.specialRequests,
            "roomType": room.roomType,
            "Number": room.Number,
            "Email": room.Email,
            "Paid":room.Paid
            });
    }
    catch(error){
        dispatch(setError(error.message));
    }
}
export const DeleteBooking=async(dispatch,id)=>{
    try{
        await deleteDoc(doc(db,"Bookings",id))
        alert("Booking Deleted Successfully")
    }
    catch(error){
        // alert("An Error Occured")
        console.log(error.message)
    }
}
export const EditBooking=async(dispatch,id,room)=>{
    await setDoc(doc(db,"Bookings",id),{
        "Firstname": room.Firstname,
        "Lastname": room.Lastname,
        "Price": room.Price,
        "roomCheckIn": {"formattedDate":room.roomCheckIn},
        "roomCheckOut": {"formattedDate":room.roomCheckOut},
        "specialRequests": room.specialRequests,
        "roomType": room.roomType,
        "Number": room.Number,
        "Email": room.Email,
        "Paid":room.Paid
    })
}








