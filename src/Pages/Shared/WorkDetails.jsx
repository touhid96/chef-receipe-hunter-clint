/* eslint-disable no-unused-vars */
import React from 'react';
import chooseMeal from '../../image/choose meal.jpeg'
import delivery from '../../image/deliver.jpeg'
import enjoyMeal from '../../image/enjoy meal.jpeg'
const WorkDetails = () => {
    return (
        <div className='ml-4 mr-4 mt-16'>
            <div >
                <h1 className='text-center text-4xl font-bold '>Watch It Works</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 rounded-lg gap-5 mt-8 border-solid border-2 border-gray-600 p-6'>
            <div className="card w-96 glass mb-16">
                <figure><img src={chooseMeal} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Choose Your Meal</h2>
                    <p className=" text-center">20+ menus to choose from</p>
                    
                </div>
            </div>
            <div className="card w-96 glass mt-8 mb-8">
                <figure><img className='w-[100%]' src={delivery} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-bold">We Deliver it to you</h2>
                    <p className=" text-center">Choose Your Date for delivery</p>
                </div>
            </div>
            <div className="card w-96 glass mt-16">
                <figure><img className='w-[50%]' src={enjoyMeal} alt="car!"/></figure>
                <div className="card-body">
                    <h2 className=" text-center text-xl font-bold">Cook & Enjoy</h2>
                    <p className=" text-center">Eat Your freshy cook meal</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default WorkDetails;