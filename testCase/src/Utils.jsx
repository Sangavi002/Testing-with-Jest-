// utils.js
export function add(a, b) {
    return a + b;
  }
  
  export async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  }
  
  