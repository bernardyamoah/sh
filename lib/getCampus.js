export default async function getCampus() {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	
	// Recommendation: handle errors
	// Recommendation: handle errors
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	  throw new Error('Failed to fetch data');
	}
   
	return res.json();
  }
