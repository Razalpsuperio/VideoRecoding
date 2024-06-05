import React from 'react';
import { Button } from '@nextui-org/react';
import './LandingPage.css'
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const navigate=useNavigate()
  const goto = () =>{
    navigate('/Home')
  }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100 flex-col '>
     
     
      <div class="loader">
<p class="loader-text">Welcome</p>
</div>
<br />
<br />
<Button variant='bordered'  className='text-white' onClick={goto}>let's start</Button>

    
    </div>
  );
};

export default LandingPage;
