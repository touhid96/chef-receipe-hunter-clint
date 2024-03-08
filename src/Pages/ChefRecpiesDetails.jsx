/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ChefRecpiesDetails = () => {
    const chefrecpies = useLoaderData()
    const [favourite, setFavourite] = useState(true)
    const [favourite_2, setFavourite_2] = useState(true)
    const [favourite_3, setFavourite_3] = useState(true)
    const {
        chef_id,
        chef_picture, 
        chef_name, 
        years_of_experience, 
        number_of_recipes, 
        likes,
        short_bio,
        recipes,

        } = chefrecpies;

        const handleFavourite = (event) =>{
            setFavourite(event.target.checked)
            toast("You Added Your Favourite Recpie")
        }
        const handleFavourite_2 = (event) =>{
            setFavourite_2(event.target.checked)    
            toast("You Added Your Favourite Recpie")

        }
        const handleFavourite_3 = (event) =>{
            setFavourite_3(event.target.checked)    
            toast("You Added Your Favourite Recpie")

        }
    return (
        <div>
            <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={chef_picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-3xl font-bold">{chef_name}</h1>
                    <p className="py-2 font-semibold">Bio: {short_bio}</p>
                    <p className="py-2">Recpies: {number_of_recipes}</p>
                    <p className="py-2">Experience: {years_of_experience}</p>
                    <p className='flex '><BsFillHandThumbsUpFill/>{likes}</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8'>
                <div className="card w-96 bg-slate-700 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">{recipes[0].recipe_name}</h2>
                        <h1 className='text-2xl font-bold '>Ingredients</h1>
                        <p>{recipes[0].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                        <h1 className='text-2xl font-bold '>Cooking Method</h1>
                        <p className=''>{recipes[0].cooking_method}</p>
                        <div className="card-actions d-flex">
                        <div>
                        <Rating style={{ maxWidth: 180 }} value={recipes[0].rating}  readOnly/>
                        </div>
                            <button onClick={handleFavourite} disabled={!favourite} className="text-white btn btn-outline btn-accent">Favourite <small className='ml-2 text-2xl text-red-800'><AiOutlineHeart/></small></button> 
                        <ToastContainer />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-cyan-800	text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">{recipes[1].recipe_name}</h2>
                        <h1 className='text-2xl font-bold '>Ingredients</h1>
                        <p>{recipes[1].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                        <h1 className='text-2xl font-bold '>Cooking Method</h1>
                        <p className=''>{recipes[1].cooking_method}</p>
                        <div className="card-actions">
                        <Rating style={{ maxWidth: 180 }} value={recipes[1].rating}  readOnly/>
                        <button onClick={handleFavourite_2} disabled={!favourite_2} className="btn btn-outline btn-accent">Favourite <small className='ml-2 text-2xl text-red-800'><AiOutlineHeart/></small></button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-indigo-600	text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">{recipes[2].recipe_name}</h2>
                        <h1 className='text-2xl font-bold '>Ingredients</h1>
                        <p>{recipes[2].ingredients.map((item, index) => <li key={index}>{item}</li>)}</p>
                        <h1 className='text-2xl font-bold '>Cooking Method</h1>
                        <p className=''>{recipes[2].cooking_method}</p>
                        <div className="card-actions">
                        <Rating style={{ maxWidth: 180 }} value={recipes[2].rating}  readOnly/>
                        <button onClick={handleFavourite_3} disabled={!favourite_3} className="btn btn-outline btn-accent">Favourite <small className='ml-2 text-2xl text-red-800'><AiOutlineHeart/></small></button>
                        </div>
                    </div>
                </div>
                
            </div>
            </div>
            <div>
            
            </div>
        </div>
    );
};

export default ChefRecpiesDetails;