import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const URL = 'https://653036f56c756603295e6a0b.mockapi.io/contacts';

export const addAPI = createAsyncThunk(
    'phonebook/addPhonebook',
    async function(arg, {rejectWithValue}) {
    
        return await axios.post(URL, arg).then(responce => {
            return responce.data;
        }).catch(error =>  {
            return rejectWithValue(error.message);
        });
           
    }
);