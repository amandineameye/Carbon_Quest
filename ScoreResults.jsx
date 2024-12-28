import { scoreData } from "./scoreData";

const ScoreCard = ({ title, bgColor, message, score }) => (
    <div>
        <h3 className={`p-1 rounded-sm ${bgColor}`}>{title}</h3>
        <p className="text-lg mt-6">{message}</p>
        <div className="mt-6 rounded-full mx-auto w-20 h-20 flex items-center justify-center text-4xl font-bold">
            {score}
        </div>
    </div>
);

const ScoreResult = ({currentScore}) => {
    const getScoreData = () =>
        scoreData.find(({ range }) => currentScore >= range[0] && currentScore <= range[1]);

    const scoreInfo = getScoreData();

    return scoreInfo && (
        <ScoreCard
            title={scoreInfo.title}
            bgColor={scoreInfo.bgColor}
            message={scoreInfo.message}
            score={currentScore}
        />
    ) 
};

export default ScoreResult