import React from 'react';
import { Head } from '@react-ssr/nestjs-express';

interface IndexProps {
  message: string;
}

const Index = (props: IndexProps) => {
  return (
    
    <React.Fragment>
      
      <Head>
        <title>An example of @react-ssr/nestjs-express</title>
      </Head>
      <h1 className="text-3xl bg-red-600 font-bold underline">
        Hello world! abcd
      </h1>
      <p>{props.message}</p>
      <a href="/about">Go to the about page</a>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10" >
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
    </React.Fragment>
  );
};

export default Index;
