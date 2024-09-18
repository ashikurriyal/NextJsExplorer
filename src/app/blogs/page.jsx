

import Link from "next/link";
import React from "react";

const page = () => {
  console.log(blogs);
  return (
    <div className="grid grid-cols-2 gap-5 mt-12">
      {blogs.map((blog) => (
        <div className="bg-teal-100 border-4 border-teal-600 rounded-xl flex flex-col gap-5 text-xl p-12" key={blog.slug}>
          <h3 className="font-bold text-2xl">{blog.title}</h3>
          <p className="font-medium">{blog.description}</p>
          <button className="bg-teal-600 px-6 py-4 rounded-xl text-white font-semibold">
            <Link href={`blogs/${blog.slug}`}>View Details</Link>
          </button>
        </div>
      ))}
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
