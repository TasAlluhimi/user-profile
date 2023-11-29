import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate()

    const user = localStorage.getItem('userProfile');
    
        if (!user) {
            navigate('/EnterProfile');
        }

        const userData = JSON.parse(user);

        const [styles, setStyles] = useState({
            backgroundColor: '#EAD2D0', 
            fontSize: '16px', 
          });
        
          const backgroundColorChange = (event) => {
            setStyles({
              ...styles,
              backgroundColor: event.target.value,
            });
          };
        
          const fontSizeChange = (event) => {
            setStyles({
              ...styles,
              fontSize: `${event.target.value}px`,
            });
          };

  return (
    <>
    <div className='flex justify-center flex-col items-center h-screen' style={{ backgroundColor: styles.backgroundColor, 
        fontSize: styles.fontSize }}>
            
    <div className='bg-white w-96 flex items-center justify-center p-2'>
        {userData.Gender == 'Female' && (
            <img className='w-24' src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png" alt="f" />
        )}

        {userData.Gender == 'Male' && (
            <img src="https://cdn-icons-png.flaticon.com/128/236/236831.png" alt="m" />
        )}

    </div>
    <div className='bg-white flex flex-col p-10 w-96'>
         <p>Name: {userData.Name}</p>
          <p>Gender: {userData.Gender}</p>
          <p>Country: {userData.Country}</p>
          <p>English Proficiency: {userData.EnglishProficiency}%</p>
    </div>

    <div className='bg-white flex flex-col p-10 w-96'>
    <label htmlFor='backgroundColorPicker'>Choose background color:</label>
          <input
            type='color'
            id='backgroundColorPicker'
            value={styles.backgroundColor}
            onChange={backgroundColorChange}
          />

          <label htmlFor='fontSize'>Choose font size:</label>
          <input
            type='number'
            id='fontSize'
            value={parseInt(styles.fontSize)}
            onChange={fontSizeChange}
          />
        </div>
    </div>
    </>
  )
}

export default Profile