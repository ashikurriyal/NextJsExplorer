import React from 'react';

const categoriesDetailsPage = ({params}) => {

    console.log(params);
    if (params.features.length == 2){
        return(
        <div>
            {params.features[1]}
        </div>
    )}
    return (
        <div className='text-xl h-screen text-center font-semibold'>
            This is Categories Details.
        </div>
    );
};

export default categoriesDetailsPage;