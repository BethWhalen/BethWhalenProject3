import { useState, useEffect } from 'react';
import firebase from './firebase';
import './App.css';
import DisplayPhoto from './DisplayPhoto';



function App() {

  const [goals, setGoals] = useState([]);
  const [userInput, setUserInput] = useState('');
  
  // START useEFFECT
  useEffect( () => {
    const dbRef = firebase.database().ref();
    // add event listener to dbRef that will listen for every time there is a change in the database
    dbRef.on('value', (response) => {
      const myData = response.val();
      const newArray = [];

      for (let propertyName in myData) {
        const goalObject = {
          key: propertyName,
          title: myData[propertyName]
        }
        newArray.push(goalObject);
      }
      setGoals(newArray);
    })
  }, [] );
  // END useEFFECT

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref();
    dbRef.push(userInput);
    setUserInput('');
  }

  const handleRemoveGoal = (goalToRemove) => {
    const dbRef = firebase.database().ref();
    dbRef.child(goalToRemove).remove();
  }

  return (
    <div className="App">
      <header>
        <h1>get your sh!t together, set some goals!</h1>
      </header> 

      <main className="wrapper">
        {/* START OF FORM SECTION */}
        <section className="formSection">
          <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="userGoal">What do you want to accomplish?</label>
            <input 
              type="text" 
              id="userGoal" 
              placeholder="I am going to..."
              required="required"
              aria-required="true"
              onChange={handleChange} 
              value={userInput}
            />
            <button onSubmit={handleSubmit}>Add my goal to the list!</button>
          </form>        
        </section>
        {/* END OF FORM SECTION */}

        {/* START OF MAIN CONTENT CONTAINER */}
        <section className="mainContainer">
          <div className="photoDiv">
            <DisplayPhoto />
          </div>  

          <div className="goalsDiv">
            <ul>
              {goals.map( (goalObject) => {
                return(
                  <li key={goalObject.key}>
                    <p className="goalbox">{goalObject.title}</p> 
                    <button className="removeButton" onClick={ () => handleRemoveGoal(goalObject.key)}>Done! Click to Remove</button>
                  </li>
                )
              })}
            </ul>
          </div>         
        </section>
        {/* END MAIN CONTENT CONTAINER */}

      </main>
      
      <footer>
        <p>Created at Juno College</p>
      </footer>
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
    // create a form on the page with text input and submit button
    // capture the users input and store it in State (attach a handleChange function to the form input)
    // upon submit, push the users input data, from State, into Firebase (use handleSubmit)
      // - prevent the default form submission
      // - create reference to the firebase database
      // - grab the value from State and push to firebase
      // - reset the state to be empty
// add the unique key data (add object, with the key & title(goal) data, to useEffect's for in loop)

// STRETCH GOALS: 
// 3. Allow a user to remove a goal they complete
    // add remove button next to each goal
    // create remove goal function that will use each unique key to tell firebase which goal to remove
    // add click event to each button that will call the remove goal function

// 4. make an API call to unsplash photos and pull a motivational background image
// set the image as a background-image


