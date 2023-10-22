import { PhoneBookSection } from './components/PhoneBookSection/PhoneBookSection';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { getAPI } from './API/GetContacts'

export const App = () => {
  
  const dispatch = useDispatch();
  const selector = useSelector(state => state.phonebook.error);

  useEffect(() => {
    dispatch(getAPI());
  },[dispatch])

  useEffect(() => {
    if (selector !== null) Notiflix.Notify.warning(`${selector}`, {position: 'center-top', fontSize: '24px',});
  },[selector])

  return (
    <>
      <p>Phonebook</p>
      <PhoneBookSection/>
    </>
  );
}
