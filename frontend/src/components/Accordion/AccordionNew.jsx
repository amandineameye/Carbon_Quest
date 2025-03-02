import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

export const AccordionHeader = ({
	accordionOpen,
	toggleAccordion,
	question,
}) => {

	//If the accordion is open, show the up chevron, otherwise show the down chevron
	const icon = accordionOpen ? <FaChevronUp /> : <FaChevronDown />;

	//Returns the question header and the chevron inside a button tag with an onClick event
	return (
		<div className="accordion-header">
			<button
				className="accordion-btn flex justify-between w-full text-left font-semibold text-title font-title text-lg"
				onClick={() => toggleAccordion()}
			>
				<div>{question}</div>
				<span>{icon}</span>
			</button>
		</div>
	);
};

export const AccordionPanel = ({
	accordionOpen,
	explanation,
	isAnswerCorrect,
	rightAnswer,
	link,
}) => {

	//Hides the whole parent div if accordionOpen is equal to false
	//grid-rows-[0fr] collapses the height of the grid row to 0
	//opacity-0 makes sure the element is completely invisible 
	const className = accordionOpen
		? "grid-rows-[1fr] opacity-100"
		: "grid-rows-[0fr] opacity-0";

	const booleanPlayerAnswer = isAnswerCorrect ? rightAnswer : !rightAnswer;
	const stringPlayerAnswer = booleanPlayerAnswer ? "Vrai" : "Faux";

	console.log("stringPlayerAnswer: ", stringPlayerAnswer);

	return (
		<div
			className={`grid overflow-hidden transition-200 text-text ${className}`}
		>
			<div className="overflow-hidden">
				{accordionOpen && (
					<>
						<div className="accordion-panel-content pt-3 pr-3">
							{/* Shows the player's answer in red if it's wrong and in green if it's right */}
							<p className={isAnswerCorrect ? "resTrue" : "resFalse"}>Ta réponse: {stringPlayerAnswer}</p>
							<p className="mb-2">{explanation}</p>
							<a
								className="flex justify-self-end mb-3 cursor-pointer font-semibold text-custom-pink hover:text-custom-purple underline"
								href={link}
								target="_blank"
							>
								Plus d'infos
							</a>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export const Accordion = ({ question, rightAnswer, explanation, link, isAnswerCorrect }) => {
	const [accordionOpen, setAccordionOpen] = useState(false);

	const toggleAccordion = () => {
		setAccordionOpen(!accordionOpen);
	};

	return (
		<div className="accordion py-3 border-b last:border-b-0 border-slate-300">
			<AccordionHeader
				accordionOpen={accordionOpen}
				toggleAccordion={toggleAccordion}
				question={question}
			/>
			<AccordionPanel
				accordionOpen={accordionOpen}
				explanation={explanation}
				link={link}
				isAnswerCorrect={isAnswerCorrect}
				rightAnswer={rightAnswer}
			/>
		</div>
	);
};
