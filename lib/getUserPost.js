export default async function getUserPost(userId) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
	
	// Recommendation: handle errors
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	  throw new Error('Failed to fetch data');
	}
   
	return res.json();
  }