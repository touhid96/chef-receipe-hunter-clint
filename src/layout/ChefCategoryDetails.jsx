/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import LazyLoad from 'react-lazy-load';
const ChefCategoryDetails = ({chef}) => {
    const {chef_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes} = chef;
    return (
        <div className='mx-auto w-96'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <LazyLoad height={300} width={350} threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                        <img src={chef_picture} className="rounded-box mt-4"/>
                    </LazyLoad>
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold"><small>Name: </small>{chef_name}</h2>
                    <p className='tex-xl font-semibold'>Experience: {years_of_experience} Years</p>
                    <p className='text-xl'>Recipes: {number_of_recipes}</p>
                    <p className='flex'><BsFillHandThumbsUpFill/>{likes}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/chefrecpiesdata/${chef_id}`}><button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCategoryDetails;