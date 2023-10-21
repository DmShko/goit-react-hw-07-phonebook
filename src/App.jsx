import { PhoneBookSection } from './components/PhoneBookSection/PhoneBookSection';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getAPI } from './API/GetContacts'

export const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAPI());
  },[])

  return (
    <>
      <p>Phonebook</p>
      <PhoneBookSection/>
    </>
  );
}
