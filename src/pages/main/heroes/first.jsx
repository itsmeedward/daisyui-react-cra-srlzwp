import React from 'react';

function First() {
  const gradientStyles = {
    background: 'linear-gradient(to right, #abbaab, #ffffff)',
  };
  return (
    <section>
    <div className="bg-gradient-to-r from-red-400 via-violet-400 to-green-400 p-4 dark:bg-violet-400  rounded-md">
      <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Provident blanditiis cum exercitationem</h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
        <div className="flex flex-wrap justify-center">
          <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
          <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
        </div>
      </div>
    </div>
    
  </section>
  );
}
export default First;
