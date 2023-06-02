export default async function getData(userId) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	
	// Recommendation: handle errors
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	  throw new Error('Failed to fetch data');
	}
   
	return res.json();
  }