import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';


export const getAsyncContacts=createAsyncThunk("contacts/getAsyncContacts", async (payload,{rejectWithValue})=>{
  try {
    const response=await axios.get(`https://api.arman-abasian.ir/contacts`);
    return response.data;
  } catch (error) {
    toast.error(error.message)
    return rejectWithValue([],error)
  }
});

export const addAsyncContact=createAsyncThunk("contacts/addAsyncContact", async (payload,{rejectWithValue})=>{
  try {
    console.log(payload)
    await axios.post(`https://api.arman-abasian.ir/contacts`,payload)
    toast.success("data added successfully")
    const {data}=await axios.get(`https://api.arman-abasian.ir/contacts`)
    return  data;
  } catch (error) {
    toast.error(error.message)
    return rejectWithValue([],error)
  }
});
export const removeAsyncContact=createAsyncThunk("contacts/removeAsyncContact", async (payload,{rejectWithValue})=>{
  try {
    await axios.delete(`https://api.arman-abasian.ir/contacts/${payload}`)
    toast.success("data removed successfully")
    const {data}=await axios.get(`https://api.arman-abasian.ir/contacts`)
    return  data;
  } catch (error) {
    toast.error(error.message)
    return rejectWithValue([],error)
  }
});
export const changeAsyncContact=createAsyncThunk("contacts/changeAsyncContact", async (payload,{rejectWithValue})=>{
  try {
    console.log(payload)
    await axios.put(`https://api.arman-abasian.ir/contacts/${payload.id}`,payload.formValues);
    toast.success("data updated successfully")
    const {data}=await axios.get(`https://api.arman-abasian.ir/contacts`)
    return  data 
    
  } catch (error) {
    toast.error(error.message)
    return rejectWithValue([],error)
  }
});


const initialState = {
  data:[],
  error:null,
  loading:false,
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  // reducers: {},
  
  extraReducers:{
  
    [getAsyncContacts.fulfilled]: (state,action) => {
      console.log(action.payload)
      return {data:action.payload,loading:false,error:null}
    },
    [getAsyncContacts.pending]: (state,action) => {
      return {data:[],loading:true,error:null}
    },
    [getAsyncContacts.rejected]: (state,action) => {
      return {data:[],loading:false,error:action.payload}
    },
    [removeAsyncContact.fulfilled]: (state,action) => {
      console.log(action.payload);
      return {data:action.payload,loading:false,error:null}
    },
    [removeAsyncContact.rejected]: (state,action) => {
      return {data:[],loading:false,error:action.payload}
    },
    [addAsyncContact.fulfilled]: (state,action) => {
      console.log(action.payload);
      return {data:action.payload,loading:false,error:null}
    },
    [addAsyncContact.rejected]: (state,action) => {
      return {data:[],loading:false,error:action.payload}
    },
    [changeAsyncContact.fulfilled]: (state,action) => {
      return {data:action.payload,loading:false,error:null}
    },
    [changeAsyncContact.rejected]: (state,action) => {
      return {data:[],loading:false,error:action.payload}
    },
  }
});
export default contactsSlice.reducer;