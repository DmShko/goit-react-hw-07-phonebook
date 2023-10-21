import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const URL = 'https://653036f56c756603295e6a0b.mockapi.io/contacts';

export const getAPI = createAsyncThunk(
    'phonebook/getPhonebook',
    async function(_, {rejectWithValue}) {
       
        return await axios.get(URL).then(responce => {
            return responce.data;
        }).catch(error =>  {
            return rejectWithValue(error.message);
        });
           
    }
);