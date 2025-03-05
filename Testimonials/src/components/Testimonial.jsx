import { useState } from 'react';
import '../Index.css';

const Testimonial = () => {
    
const [currentIndex,setCurrentIndex] = useState (0)
const Testimonial = [
    {
        Quote:"If you never go you will never know",
        Author : "Aswath",
    },
    {
        Quote:"You will be needed when you have whats needed",
        Author : "Aswath",
    },
    {
        Quote: "Peace comes with a lot of good byes",
        Author: "Aswath",
    }
];

 const handlePrevClick = () => {
    setCurrentIndex((currentIndex +Testimonial.length-1) % Testimonial.length)
 };

 const handleNextClick = () => 
    setCurrentIndex((currentIndex +Testimonial.length+1) % Testimonial.length)
 

  return (
    <div className='testimonials'>
      <div className='testimonials-quote'>
       {Testimonial[currentIndex].Quote}
      </div>
      <div className="testimonials-author">
        {Testimonial[currentIndex].Author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}

export default Testimonial