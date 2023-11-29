import React from 'react';
import { useNavigate } from 'react-router-dom'

function EnterProfile() {
    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        Name: '',
        Gender:'',
        Age: '',
        Country: '',
        EnglishProficiency: '',
      });

      const [validationError, setValidationError] = useState('');

  const change = (event) => {
    setInputs({...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const submit = () => {

    if (inputs.Name.length < 3) {
      setValidationError('Name should be at least 3 characters long');
      return;
    }

    if (!inputs.Gender) {
      setValidationError('Select your gender please');
      return;
    }

    if (!inputs.Country) {
      setValidationError('Please select a Country');
      return;
    }

    if (!inputs.EnglishProficiency) {
        setValidationError('Please fill your english level');
        return;
      }
    
    setValidationError('');
    localStorage.setItem('userProfile', JSON.stringify(inputs));
    navigate('/Profile')
   
  };

  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen bg-[rgb(234,210,208)]'>
      <div className='bg-white flex flex-col p-10 w-96'>
        <p className='text-lg text-center'>Fill your profile</p>
          <label className='p-1' htmlFor='Name'>
            Name:
          </label>
          <input
            className='border'
            type='text'
            name='Name'
            placeholder='Your Name'
            value={inputs.Name}
            onChange={change}
          />

<label className='p-1'>Gender:</label>
          <div className='flex items-center'>
          <input
              type='radio'
              id='female'
              name='Gender'
              value='Female'
              checked={inputs.Gender === 'Female'}
              onChange={change}
              
            />
            <label htmlFor='female' className='ml-2'>
              Female
            </label>

            <input
              type='radio'
              id='male'
              name='Gender'
              value='Male'
              checked={inputs.Gender === 'Male'}
              onChange={change}
              className='ml-4'
            />
            <label htmlFor='male' className='ml-2'>
              Male
            </label>

          </div>

          <label className='p-1' htmlFor='Country'>
          Country:
          </label>
          <select
            className='border'
            name='Country'
            value={inputs.Country}
            onChange={change}
          >
            <option value='' disabled>
              Select Country
            </option>
            <option value='Saudi Arabia'>Saudi Arabia</option>
            <option value='Kuwait'>Kuwait</option>
            <option value='UAE'>UAE</option>
            <option value='Eygpt'>Eygpt</option>
            <option value='USA'>USA</option>
          </select>

          <label className='p-1'>English Proficiency:</label>
          <input
            type='range'
            id='englishProficiency'
            name='EnglishProficiency'
            min='0'
            max='100'
            value={inputs.EnglishProficiency}
            onChange={change}
          />
          <p>Current English Proficiency: {inputs.EnglishProficiency}%</p>
          

          {validationError && (
            <p className='text-red-500'>{validationError}</p>
          )}

          <button className='mt-5 bg-black text-white' onClick={submit}>
            Submit
          </button>
        {/* </form> */}
      </div>
    </div>
    </>
  )
}

export default EnterProfile