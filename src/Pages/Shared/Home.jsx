/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import banner1 from '../../../src/image/banner1.jpeg'
import banner2 from '../../../src/image/banner2.jpeg'
import banner3 from '../../../src/image/banner3.jpeg'
import banner4 from '../../../src/image/banner4.jpeg'
import ChefCategory from './chefCategory';
import Footer from './Footer';
import { AuthContext } from '../../providers/AuthProvider';
import WorkDetails from './WorkDetails';
import TopUser from './TopUser';
import LazyLoad from 'react-lazy-load';
const Home = () => {
    return (
        <div className="mt-8">
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                        <div className="carousel-item">
                        <LazyLoad height={270} width={420} threshold={0.95} onContentVisible={() => {('loaded!')}}>
                            <img src={banner1} className="rounded-box"/>
                        </LazyLoad>
                        </div> 
                        <div className="carousel-item">
                        <LazyLoad height={270} width={420} threshold={0.95} onContentVisible={() => {('loaded!')}}>
                            <img src={banner2} className="rounded-box"/>
                        </LazyLoad>
                        </div> 
                        <div className="carousel-item">
                        <LazyLoad height={270} width={420} threshold={0.95} onContentVisible={() => {('loaded!')}}>
                            <img src={banner3} className="rounded-box"/>
                        </LazyLoad>
                        </div> 
                        <div className="carousel-item">
                        <LazyLoad height={270} width={420} threshold={0.95} onContentVisible={() => {('loaded!')}}>
                            <img src={banner4} className="rounded-box"/>
                        </LazyLoad>
                        </div> 
                        </div>
                    <div>
                    <h1 className="text-5xl font-bold">Food Blog!</h1>
                    <p className="py-6">Eat, drink and live free. There’s no telling what might happen tomorrow. Eat whatever you want, and if someone tries to lecture you about your weight, eat them too!</p>
                    <button className="btn btn-primary">Get Started</button>

                    </div>
                </div>
            </div>

            <div>
                 <ChefCategory></ChefCategory>
            </div>
            <div>
                <WorkDetails></WorkDetails>
            </div>
            <div>
                <TopUser></TopUser>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;