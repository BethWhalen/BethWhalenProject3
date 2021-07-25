import { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';
import { BLOCK_SCOPED_SYMBOL } from '@babel/types';


function App() {

  const [goals, setGoals] = useState([]);

  useEffect( () => {
    // dbRef = reference to the firebase database
    const dbRef = firebase.database().ref();
    // add event listener to dbRef that will listen for every time there is a change in the database, and then "fire" the callback function that will get the data (response)
    dbRef.on('value', (response) => {
      // console.log(response.val());

      // variable called data to store the response from Firebase; .val() method gets the data object
      const myData = response.val();
      // new State variable that will store the response as a State
      const newArray = [];

      // using for in loop to itirate through the object and get each goal
      for (let propertyName in myData) {
        // const goalObject = {
        //   key: propertyName,
        //   title: myData[propertyName]
        // }
        // push the goal into the newArray
        newArray.push(myData[propertyName]);
      }
      // call setGoals in order to update State using the newArray
      setGoals(newArray);
    })


  }, [] );



  return (
    <div className="App">
      <h1>Project 3</h1>

      <ul>
        {goals.map( (goal) => {
          return(
            <li>
              <p>{goal}</p>
            </li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;

// PSEUDO CODE:

// 1. Display the goals listed in firebase to the page
    // set up State to store the goal data from firebase 
    // get the data from firebase 
      // - useEffect - call for the data, set up with an empty array so that code is only run once after the intial render
      // - create variable (dbRef) to hold reference to firebase database
      // - add an event listener to dbRef that will fire every time there is a change in the database
    // store the data from firebase in a new State variable

// 2. Allow a user to add goals
    //