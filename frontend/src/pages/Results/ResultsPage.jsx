import { Accordion } from "../../components/Accordion/Accordion.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { questions } from "../../data/questions.js";
import ScoreResult from "../../components/ScoreResult/ScoreResult.jsx";

const ResultsPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [allScores, setAllScores] = useState([]);
	const { username, currentScore, answersToNumbersArray } = location.state;

	// const apiURL = "https://super-carbon-quest-api.vercel.app/"
	const apiURL = import.meta.env.VITE_API_URL;
	
	//Excludes the last element (the current score) and shows the 5 previous ones
	const userScores = allScores.slice(-6, -1);

	useEffect(() => {
		const getAllScores = async () => {
			try {
				const response = await axios.get( apiURL
					 +
						"oldScores?username=" +
						username
				);

				setAllScores(response.data.scoresArray);
			} catch (error) {
				console.log("Error in the useEffect: ", error);
			}
		};

		getAllScores();
	}, []);

	const handleClick = () => {
		navigate("/game", { state: { username: username } });
	};

	return (
		<>
			<main className="flex-1">
				<div className="container text-center mt-14">
					<h1>Le résultat de ta quête</h1>
					<div className="bg-[#f5f8f6] rounded-lg p-8 w-1/2 mx-auto mt-12">
						<h2>Ton score</h2>
						<ScoreResult currentScore={currentScore} />
					</div>
				</div>

				{userScores.length > 0 && (
					<div className="container text-center mt-12">
						<h2>Tes précédents scores</h2>
						<div className="flex justify-center gap-4">
							{/* Ici, il faut afficher les scores du tableau qu'on reçoit */}
							{userScores.map((score) => (
								<p className="rounded-full bg-text w-12 h-12 flex items-center justify-center text-white text-2xl font-semibold">
									{score}
								</p>
							))}
						</div>
					</div>
				)}

				<button
					className="flex text-lg font-semibold bg-title hover:bg-text-light transition-200 rounded-lg text-white px-10 py-2 mx-auto mt-12"
					onClick={handleClick}
				>
					Rejouer
				</button>

				<div className="container py-16">
					<div className="py-2 px-6 bg-white rounded-lg w-9/12 mx-auto">
						{questions.map(({ question, explanation, link, answer }, index) => (
							<Accordion
								question={question}
								explanation={explanation}
								isAnswerCorrect={Boolean(answersToNumbersArray?.[index])}
								link={link}
								rightAnswer={answer}
							/>
						))}
					</div>
				</div>
			</main>
		</>
	);
};

export default ResultsPage;
