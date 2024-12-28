import { useState } from "react";
import { cloneElement } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

export const Accordion = ({ headerTitle, content, href, isAnswerCorrect }) => {
   const [accordionOpen, setAccordionOpen] = useState(false);

   const toggleAccordion = () => {
      setAccordionOpen(!accordionOpen);
   };


   return (
      <div className="accordion py-3 border-b last:border-b-0 border-slate-300">
         <AccordionHeader accordionOpen={accordionOpen} toggleAccordion={toggleAccordion} headerTitle={headerTitle} />
         <AccordionPanel content={content} accordionOpen={accordionOpen} href={href} isAnswerCorrect={isAnswerCorrect} />
      </div>
   );
};

export const AccordionHeader = ({ accordionOpen, toggleAccordion, headerTitle }) => {


   const icon = accordionOpen ? <FaChevronUp /> : <FaChevronDown />;

   return (
      <div className='accordion-header'>
         <button className="accordion-btn flex justify-between w-full text-left font-semibold text-title font-title text-lg" onClick={() => toggleAccordion()}>
            <div>{headerTitle}</div>
            <span>{icon}</span>
         </button>
      </div>
   );
};

export const AccordionPanel = ({ content, accordionOpen, isAnswerCorrect, href }) => {
   const className = accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0';

   return (
      <div className={`grid overflow-hidden transition-200 text-text ${className}`}>
         <div className='overflow-hidden'>
            {accordionOpen &&
               <>

                  <div className='accordion-panel-content pt-3 pr-3'>
                     <p
                        className={
                           isAnswerCorrect ? "resTrue" : "resFalse"
                        }
                     >
                        Faux
                     </p>
                     <p className="mb-2" >{content}</p>
                     <a
                        className="flex justify-self-end mb-3 cursor-pointer font-semibold text-custom-pink hover:text-custom-purple underline"
                        href={href}
                        target="_blank"
                     >
                        Plus d'infos
                     </a>
                  </div>
               </>

            }
         </div>
      </div>
   );
};