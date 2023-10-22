import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const URL = 'https://653036f56c756603295e6a0b.mockapi.io/contacts';

export const deleteAPI = createAsyncThunk(
    'phonebook/deletePhonebook',
    async function(arg, {rejectWithValue}) {
       
        return await axios.delete(`${URL}/${arg}`).then(responce => {
          
            return responce.data;
        }).catch(error =>  {
            return rejectWithValue(error.message);
        });
           
    }
);