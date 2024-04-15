import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button.jsx';
import { add, fetchData } from './Utils.jsx'; // Import the add function and fetchData function

function App() {
  const [fetchDataResult, setFetchDataResult] = useState(null);

  useEffect(() => {
    // Call fetchData function when the component mounts
    fetchData().then(data => {
      setFetchDataResult(data);
    });
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Call the add function
  const result = add(1, 2);

  return (
    <>
      <Button />
      {result}
      {fetchDataResult && <div>{fetchDataResult.message}</div>}
    </>
  );
}

export default App;
