import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { arrSymmetricDifference, flattenAndUnique, getValuesByIndex } from './utils';
import _ from 'lodash';

function App() {

  const [objArr, setObjArr] = useState([
    {
      id: 1,
      name: 'Cassie',
      age: 23
    },
    {
      id: 2,
      name: 'Dawn',
      age: 24
    },
    {
      id: 3,
      name: 'Tim',
      age: 25
    }
  ]);
  const [obj, setObj] = useState({
    name: 'Amy',
    title: 'UI/UX Designer',
    age: 24
  })

  useEffect(() => {

    // Update second index
    let tempObjArr = [...objArr];
    tempObjArr[1] = {
      id: 2,
      name: 'Lizzie',
      age: 24
    }
    setObjArr(tempObjArr);

    // Update object's 2 property values
    setObj({
      ...obj,
      name: 'Jim',
      title: 'Software Engineer'
    })

    // Symmetric difference
    const arrOne = [{
        id: 20,
        name: 'alex'
      }, {
        id: 30,
        name: 'alina'
    }]
    const arrTwo = [{
        id: 40,
        name: 'hello'
      }, {
        id: 30,
        name: 'world'
    }]
    console.log(arrSymmetricDifference(arrOne, arrTwo, 'id'));

    // Get all tables
    const str = ['u', 'ec']
    const arr = [{
      storageVal: 'u',
      table: ['E', 'F']
    },{
      storageVal: 'data',
      table: ['E', 'F']
    }, {
      storageVal: 'ec',
      table: ['E']
    }]

    console.log(getValuesByIndex('storageVal', str, 'table', arr));
    
    // Flatten an array 
    const a = [['E'], ['F']] 
    console.log(_.flatten(a));

    const t = [['E', 'F'], [['F'], ['G']]];
    console.log(flattenAndUnique(t));

    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
