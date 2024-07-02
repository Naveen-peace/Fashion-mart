import React, { useState } from 'react';
import QuestionMark from '../assets/icon/QuestionMark'
import ButtonComponent from '../component/ButtonComponent';



const FrequentlyAsked = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="Frequently-asked-head">
            <h2>Frequently asked questions</h2>
            <div className="frequently-flex">
                <div className="accordion">
                    {accordionData.map((item, index) => (
                        <div className="accordion-item" key={index}>
                            <button
                                className={`accordion-button ${activeIndex === index ? 'collapsed' : ''}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                {item.question}
                                <span className="accordion-button-icon"></span>
                            </button>
                            <div className={`accordion-answer ${activeIndex === index ? 'active' : ''}`}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="more-question-head">
                    <div className="more-question">
                        <div className="more-question-icon"><QuestionMark /></div>
                        <h3>Do you have more questions?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum.</p>
                        <ButtonComponent
                            customClass="morequestion-btn first-button-background-colour"
                            label={
                                <>
                                    Shoot a direct mail
                                </>
                            }
                            width={"265px"}
                            height={"68px"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const accordionData = [
    {
        question: "How can I become a vendor on the app?",
        answer: "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum."
    },
    {
        question: "Is there a way I can reach out to the seller directly?",
        answer: "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum."
    },
    {
        question: "What if I want a refund?",
        answer: "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum."
    },
    {
        question: "Can I request for a particular material?",
        answer: "Lorem ipsum dolor sit amet consectetur. Quam libero viverra faucibus condimentum."
    },
];

export default FrequentlyAsked;
