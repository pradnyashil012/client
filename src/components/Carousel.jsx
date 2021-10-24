import React,{useState} from 'react';
import {SliderData} from "../constants";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";

export default function Carousel({slides}) {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1); 
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    const autoSlide = () => {
        let timer;
        clearTimeout(timer);
        timer = setTimeout(function(){
            setCurrent(current === length - 1 ? 0 : current + 1); 
        }, 3000);
    }

    autoSlide();

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        
            <section className='slider'>
                <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                {
                    SliderData.map((slide, index)=>(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt="Carousel image" className='image' />)}
                            
                        </div>
                    ))
                }
            </section>
       
    )
}
