export const fetchJSON = async (url: string) => {
	const data = await fetch(url)
		.then((res) => res.json())
		.then(json => json)
	return data
}
