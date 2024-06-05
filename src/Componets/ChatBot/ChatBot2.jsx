import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import './Bot.css'
const Review = ({ steps }) => {
  const { name, gender, age } = steps;
  
  return (
    <div  style={{ width: '100%' }}>
      <h3>Summary</h3>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name.value}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender.value}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{age.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Chatbot2 = () => {

  const handleEnd = ({ steps }) => {
    const { name, gender, age } = steps;
    console.log('Name:', name.value);
    console.log('Gender:', gender.value);
    console.log('Age:', age.value);
  };

  const theme = {
    background: '#e0f7fa', 
    fontFamily: 'Arial, Helvetica, sans-serif',
    headerBgColor: '#0277bd', 
    headerFontColor: '#fff', 
    headerFontSize: '15px',
    botBubbleColor: '#0288d1', 
    botFontColor: '#fff', 
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a', 
  };

  

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}! What is your gender?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'male', label: 'Male', trigger: '5' },
              { value: 'female', label: 'Female', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'How old are you?',
            trigger: 'age',
          },
          {
            id: 'age',
            user: true,
            trigger: '7',
            validator: (value) => {
              if (isNaN(value)) {
                return 'value must be a number';
              } else if (value < 0) {
                return 'value must be positive';
              } else if (value > 120) {
                return `${value}? Come on!`;
              }
              return true;
            },
          },
          {
            id: '7',
            message: 'Great! Check out your summary',
            trigger: 'review',
          },
          {
            id: 'review',
            component: <Review />,
            asMessage: true,
            trigger: 'thanks',
          },
          {
            id: 'thanks',
            message: 'Have a nice day!',
            end: true,
          },
          {
            id: 'thanks',
            message: 'Any additional information?',
            end: true,
          },
        ]}
        floating={true}
        handleEnd={handleEnd}
      />
    </ThemeProvider>
  );
};

export default Chatbot2;
