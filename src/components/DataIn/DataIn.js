import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../phonebookStore/phonebookSlice';
import { addAPI } from '../../API/AddContact';
import Notiflix from 'notiflix';

// add css modules
import di from './DataIn.module.css';
import { getAPI } from 'API/GetContacts';

export const DataIn = () => {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');
  // const [inputNameValid, setInputNameValid] = useState('');!!!!!!!!!!!!!!!!
  // const [inputNumberValid, setInputNumberValid] = useState('');!!!!!!!!!!!!!!!!!!

  const dispatch = useDispatch();
  const selector = useSelector(state => state.phonebook.items);

  const clearInputs = () => {
    setName('');
    setNumber('');
  };

  // transfer contacts data to method in App 'reducer'
  const addUser = evt => {
    // transfer data only, if valid fields is valid
    // if (inputNameValid === false && inputNumberValid === false) {!!!!!!!!!!!!!!!!!!!!!!
      evt.preventDefault(getAPI);

      if (
        selector.find(element => element.name === [name, phone].join(' ')) !==
        undefined
      ) {
        Notiflix.Notify.warning(`"${name}" is already in contacts!`, {
          position: 'center-top',
          fontSize: '24px',
        });
      } else {
        // sdd user to Redux store
        dispatch(addAPI({ name, phone })).then(value =>
          dispatch(add({ name, phone, value }))
        );
      }

      // dispatch(add({name, phone,}));
    // } else {!!!!!!!!!!!!!
    //   evt.preventDefault();!!!!!!!!!!!!!!
    // }!!!!!!!!!!!!!!

    clearInputs();
  };

  // const checkValid = data => {!!!!!!!
  //   // CHANGE 'VALID' PROPERTIES OF inputs ON BASE PREVIOUS VALUE
  //   if (data.validity.patternMismatch === false) {!!!!!!!!!!
  //     data.name === 'name'!!!!!!!!!!!
  //       ? setInputNameValid(value => value && data.validity.patternMismatch)!!!!!!!
  //       : setInputNumberValid(value => value && data.validity.patternMismatch);!!!!!!!!!!!!
  //   } else {!!!!
  //     data.name === 'name'!!!!!!!!!
  //       ? setInputNameValid(value => value || data.validity.patternMismatch)!!!!!!1
  //       : setInputNumberValid(value => value || data.validity.patternMismatch);!!!!!!!!!!!
  //   }!!!!
  // };!!!!!!!!

  const stateChange = data => {
    const { name, value } = data;

    // change 'name' and 'number' without use previous value
    name === 'name' ? setName(value) : setNumber(value);
  };

  const inputChange = evt => {
    // change valid properties of inputs states, so that output users only, if bouth input fields contain valid value
    // checkValid(evt.target);!!!!!!!!!!!!!!!!!!!!!!!!!
    // change 'name' and 'number' fields in 'data'
    stateChange(evt.target);
  };

  return (
    <>
      <form onSubmit={addUser} className={di.form}>
        <label className={di.lable}>
          <p className={di.text}>Name</p>
          <input
            className={di.input}
            value={name}
            name="name"
            type="text"
            onChange={inputChange}
            // pattern="\w{0}[a-zA-Zа-яА-Я]+\s\w{0}[a-zA-Zа-яА-Я]+"
            title="Please, use only letters and space in the following form: * *!"
            placeholder="Only letters # #"
            required
          ></input>
        </label>

        <label className={di.lable}>
          <p className={di.text}>Number</p>
          <input
            className={di.input}
            value={phone}
            name="number"
            type="tel"
            onChange={inputChange}
            // pattern="\d{3}[0-9]-\d{1}[0-9]-\d{1}[0-9]"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +
            in the following form: ####-##-##!"
            placeholder="Only digits ####-##-##"
            required
          ></input>
        </label>

        <button className={di.button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};
