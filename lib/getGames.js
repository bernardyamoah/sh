export async function getGames() {
	const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG}`);
	
	if (!res.ok) {
	  throw new Error('Failed to fetch data');
	}
	
	const data = await res.json();

	return data.results;
  }