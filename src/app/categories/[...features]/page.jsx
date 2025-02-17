import React from 'react';

const categoriesDetailsPage = ({params}) => {

    console.log(params);
    if (params.features.length == 3){
        return(
        <div>
            {params.features[2]}
        </div>
    )}
    return (
        <div className='text-xl h-screen'>
            This is Categories Details Page
        </div>
    );
};

export default categoriesDetailsPage;