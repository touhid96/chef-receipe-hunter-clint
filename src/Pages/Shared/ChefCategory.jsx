/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ChefCategoryDetails from "../../layout/ChefCategoryDetails";

const ChefCategory = () => {
  const [chefdata, setChefdata] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("https://chef-receipe-hunter-server-69grac9y9.vercel.app/chefdata")
      .then((res) => res.json())
      .then((data) => setChefdata(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-center">Our Main Chef Is Here</h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
          {showAll
            ? chefdata.map((chef) => (
                <ChefCategoryDetails key={chef.chef_id} chef={chef}></ChefCategoryDetails>
              ))
            : chefdata
                .slice(0, 4)
                .map((chef) => (
                  <ChefCategoryDetails key={chef.chef_id} chef={chef}></ChefCategoryDetails>
                ))}
        </div>
        <div className="text-center">
          {!showAll && (
            <button onClick={() => setShowAll(true)} className="btn btn-sm btn-secondary my-4">
              Show All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefCategory;
