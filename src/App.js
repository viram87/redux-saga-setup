import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchData } from './redux/action/formAction/formAction';
import { fetchData2 } from './redux/action/anotherAction/anotherAction';

function App() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state?.formReducer);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: ""
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(fetchData(form));
    // dispatch(fetchData2(form));
    console.log(form, "form data");
  };


  const clickHandler = (e) => {
    dispatch(fetchData(form));
  };

  return (
    <div>
      {data?.loading && <h1>Loading...</h1>}
      <form onSubmit={submit}>
        <div className='m-4'>Firstname : <input onChange={changeHandler} name='firstname' className='border border-gray-400 ml-2' type='text' /></div>
        <div className='m-4'>Lastname : <input onChange={changeHandler} name='lastname' className='border border-gray-400 ml-2' type='text' /></div>
        <div className='m-4'>Email : <input onChange={changeHandler} name='email' className='border border-gray-400 ml-2' type='text' /></div>
        <div className='m-4'>Phone : <input onChange={changeHandler} name='phone' className='border border-gray-400 ml-2' type='text' /></div>
        <button type='button' onClick={submit} className='border px-3 py-1 ml-2 cursor-pointer' >Submit</button>
        <button type='button' onClick={clickHandler} className='border px-3 py-1 ml-2 cursor-pointer' >Submit2</button>
      </form>
    </div>
  );
}

export default App;
