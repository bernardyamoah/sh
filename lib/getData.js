export default async function getUserPost() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	
	// Recommendation: handle errors
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	  throw new Error('Failed to fetch data');
	}
   
	return res.json();
  }