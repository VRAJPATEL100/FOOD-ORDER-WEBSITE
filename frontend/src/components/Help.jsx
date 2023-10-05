import React from 'react';
import '../styles/Help.css'
import Chatbot from './Chatbot'
import setBodyColor from './setBodyColor'
function Help(props) {
  setBodyColor({color:`${props.color}`})
  const faqs = [
    {
      question: 'How much comission will i be charger by Food Order Website?',
      answer:
        'The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.',
    },
    {
      question: 'What are the mandatory documents needed to list my restaurant on Food Order Website?',
      answer:
        '- Copies of the below documents are mandatory\n- FSSAI Licence OR FSSAI Acknowledgement\n- Pan Card\n- GSTIN Certificate\n- Cancelled Cheque OR bank Passbook\n- Menu',
    },
    {
      question: 'After i submit all documents,how long will it take for my restaurant to go live on Food Order Website?',
      answer:
        'After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform',
    },
    {
      question: 'What is this one time onboarding fees?Do i have to pay for it while regestering?',
      answer:
        'This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from Food Order Website.',
    },
    {
      question: 'Who do i contact if i need help and support in getting onboarded?',
      answer:
        'You can connect with Partner Support on 080-67466777/68179777 or write to onboarding@foodorder.in',
    },
  ];

  return (
    <div className="faq-section" style={{paddingTop:"6%"}}>
      <h2 className="text-center" style={{ color: `${props.color==='black'?'orange':"orange"}`,userSelect:'none' }}>FAQs</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="card  " key={index}>
            <div className="card-header" id={`faqHeading${index}`} >
              <h5 className="mb-0">
                <button
                style={{userSelect:"none",textDecoration:'none'}}
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#faqCollapse${index}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                  aria-controls={`faqCollapse${index}`}>
                  {faq.question} 
                </button>
              </h5>
            </div>
            <div
              id={`faqCollapse${index}`}
              className={`collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`faqHeading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body" style={{userSelect:'none'}}>{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <Chatbot color={props.color}></Chatbot>
    </div>
  );
}

export default Help;