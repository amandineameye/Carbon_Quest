import { scoreData } from "../../data/scoreData.js";

const ScoreCard = ({ title, titleColor, nbColor, message, score }) => (
	<div>
		<h3 className={`p-1 rounded-sm ${titleColor}`}>{title}</h3>
		<p className="text-lg mt-6">{message}</p>
		<div
			className={`mt-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center text-white text-4xl font-bold ${nbColor}`}
		>
			{score}
		</div>
	</div>
);

const ScoreResult = ({ currentScore }) => {
	const getScoreData = () =>
		scoreData.find(
			({ range }) => currentScore >= range[0] && currentScore <= range[1]
		);

	const scoreInfo = getScoreData();

	return (
		scoreInfo && (
			<ScoreCard
				title={scoreInfo.title}
				titleColor={scoreInfo.titleColor}
				nbColor={scoreInfo.nbColor}
				message={scoreInfo.message}
				score={currentScore}
			/>
		)
	);
};

export default ScoreResult;
