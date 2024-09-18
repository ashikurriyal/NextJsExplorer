import Link from 'next/link';
import React from 'react';

const AboutPageContent = () => {
    return (
        <div className='text-4xl text-center text-teal-600 flex justify-around font-medium'>
            <Link href='about/history'>History</Link>
            <Link href='about/mission'>Mission</Link>
        </div>
    );
};

export default AboutPageContent;