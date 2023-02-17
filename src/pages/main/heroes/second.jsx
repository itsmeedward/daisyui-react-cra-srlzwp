export default function Second() {
  
  return (
    <section className="grid gap-6 text-center lg:grid-cols-2 xl:grid-cols-5 ">
    <div className="w-full p-6 rounded-md sm:p-16 xl:col-span-2 ">
      <span className="block mb-2 dark:text-violet-400">Mamba design system</span>
      <h1 className="text-5xl font-extrabold dark:text-gray-50">Build it with Mamba</h1>
      <p className="my-8">
        <span className="font-medium dark:text-gray-50">Modular and versatile.</span>The ultimate design toolkit for savvy technology startups.
      </p>
      <form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
        <div>
          <label for="name" className="text-sm sr-only">Your name</label>
          <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
        </div>
        <div>
          <label for="lastname" className="text-sm sr-only">Email address</label>
          <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
        </div>
        <button className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join the waitlist</button>
      </form>
    </div>
    <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500" />
</section>

  );
}
