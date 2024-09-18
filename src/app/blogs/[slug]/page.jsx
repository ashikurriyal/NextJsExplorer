import React from 'react';

const page = ({params}) => {
    console.log(params.slug)
    const {title, description} = blogs.find((blog) => blog.slug == params.slug)
    return (
        <div className='py-36 mt-12'>
            <h3 className='font-bold text-4xl'>{title}</h3>
            <h3 className='font-medium text-2xl'>{description}</h3>
        </div>
    );
};



const blogs = [
    {
      slug: "mastering-nextjs-routing",
      title: "Mastering Routing in Next.js",
      description:
        "An in-depth guide to building dynamic routes and optimizing navigation in Next.js for better user experience.",
    },
    {
      slug: "css-grid-vs-flexbox",
      title: "CSS Grid vs Flexbox: When to Use Which?",
      description:
        "A comprehensive comparison between CSS Grid and Flexbox, explaining their differences and use cases.",
    },
    {
      slug: "full-stack-react-node",
      title: "Building a Full-Stack App with React and Node.js",
      description:
        "A step-by-step tutorial on creating a full-stack web application using React for the frontend and Node.js for the backend.",
    },
    {
      slug: "optimizing-web-performance",
      title: "10 Tips for Optimizing Web Performance",
      description:
        "Discover practical tips and techniques to enhance your website’s speed and improve user engagement.",
    },
    {
      slug: "intro-to-serverless-architecture",
      title: "An Introduction to Serverless Architecture",
      description:
        "Learn the basics of serverless architecture, its benefits, and how to build scalable applications without managing servers.",
    },
  ];

  export default page;