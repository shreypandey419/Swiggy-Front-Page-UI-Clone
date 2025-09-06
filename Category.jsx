import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Category() {
    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);
    

    const fetchCategory = async () => {
        const response = await fetch("http://localhost:5001/categories");
        const data = await response.json();
        setCategory(data);
    };    

    useEffect(
        () => {
            fetchCategory();
        }, []
    )
    const nextSlide = () => {
        console.log(categories.length);
        if (categories.length - 8 === slide) return false;
        setSlide(slide + 3);
    }
    const prevSlide = () =>  {
        if (slide === 0) return false;
        setSlide(slide - 3);
    }
    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[20px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div className='curson-pointer flex justify-center items-center w-[30px] 
                    h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                        <FaArrowLeft/>
                    </div>
                    <div className='curson-pointer flex justify-center items-center w-[30px] h-[30px] 
                    bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
                        <FaArrowRight/>
                    </div>
                </div>
            </div> 
            <div className='flex overflow-hidden'>
                {
                    categories.map(
                        (cat, index) => {
                            return(
                                <div style={{
                                    transform : `translateX(-${slide * 100}%)`
                                }} key={index} className='w-[150px] shrink-0 duration-500'>
                                    <img src={"http://localhost:5001/images/" + cat.image} alt=''/>
                                </div>
                            )
                        }
                    )
                }
                
            </div>  
            <hr className='my-6 border-[1px]'/>    
        </div>
    )
}