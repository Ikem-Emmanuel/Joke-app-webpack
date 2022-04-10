import axios from "axios";
const generatejokes = () => {
	const config = {
		headers: {
			accept: "application/json",
			"X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
			"X-RapidAPI-Key": "a1ee634a9amsh71d8b3648c477b8p10f023jsn2405ae8a771b",
		},
	};
	axios.get("https://dad-jokes.p.rapidapi.com/random/joke/png", config).then(res => {
		let image = new Image();
		image.src = res.data.body.image;
		document.getElementById("jokeSetup").innerHTML = res.data.body.setup;
		console.log(res.data.body);
		document.getElementById("jokePunchlines").innerHTML = res.data.body.punchline;
	});
};

export default generatejokes;
