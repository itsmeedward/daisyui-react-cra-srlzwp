import React from 'react';
import {BrowseRouter as Router, link} from 'react-dom'


export default function Main() {
  const gradientStyles = {
    background: "linear-gradient(to right, #abbaab, #ffffff)"
  }
  return (
    <>
  <section>
  <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24 rounded-l">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>
          <p className="hidden text-white/90 sm:mt-4 sm:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>
          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
          className="h-40 w-full object-cover sm:h-56 md:h-full"
          style={gradientStyles}
        />
        <img
          alt="Student"
          src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="h-40 w-full object-cover sm:h-56 md:h-full rounded-r"
        />
      </div>
    </div>
  </div>
</section>



<section>
  <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
  style={gradientStyles}>
    <div
      class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
    >
      <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
        <h2 class="text-3xl font-bold sm:text-4xl">Find your career path</h2>

        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
          aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
          Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
          Obcaecati, autem.
        </p>

        <a
          class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="/get-started"
        >
          <span class="text-sm font-medium"> Get Started </span>

          <svg
            class="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>

        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/accountant"
        >
          <span class="inline-block rounded-lg bg-gray-50 p-3">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <h2 class="mt-2 font-bold">Accountant</h2>

          <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </a>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">Grow your audience</h2>

        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>

        <a
          href="#"
          class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          <span class="text-sm font-medium"> Get Started </span>

          <svg
            class="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="bg-white">
  <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div class="mx-auto max-w-3xl text-center">
      <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
        Trusted by eCommerce Businesses
      </h2>

      <p class="mt-4 text-gray-500 sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
        laborum labore provident impedit esse recusandae facere libero harum
        sequi.
      </p>
    </div>

    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Total Sales
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
            $4.8m
          </dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Official Addons
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
        </div>

        <div
          class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center"
        >
          <dt class="order-last text-lg font-medium text-gray-500">
            Total Addons
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
<section className="p-6 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-4 mx-auto text-center">
		<h2 className="text-4xl font-bold">Trusted by the industry leaders</h2>
	</div>
	<div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
				<path d="M0.063 24.026c0.094-0.156 0.245-0.167 0.464-0.031 4.844 2.818 10.125 4.224 15.823 4.224 3.802 0 7.557-0.708 11.266-2.125l0.417-0.188c0.188-0.083 0.313-0.135 0.391-0.172 0.302-0.12 0.521-0.063 0.703 0.172 0.161 0.229 0.12 0.448-0.161 0.641-0.339 0.25-0.802 0.547-1.339 0.87-1.661 0.99-3.521 1.755-5.583 2.302-2.036 0.542-4.057 0.813-6.021 0.813-3.021 0-5.88-0.526-8.578-1.583-2.693-1.057-5.094-2.547-7.24-4.464-0.135-0.099-0.203-0.203-0.203-0.297 0-0.063 0.026-0.12 0.068-0.172zM8.813 15.734c0-1.339 0.328-2.484 0.99-3.432s1.563-1.667 2.724-2.156c1.057-0.448 2.339-0.766 3.88-0.958 0.521-0.063 1.38-0.141 2.563-0.234v-0.49c0-1.245-0.141-2.078-0.401-2.5-0.406-0.578-1.042-0.87-1.922-0.87h-0.24c-0.641 0.063-1.198 0.26-1.661 0.615-0.469 0.359-0.771 0.839-0.901 1.464-0.083 0.396-0.276 0.62-0.583 0.677l-3.359-0.422c-0.328-0.078-0.495-0.24-0.495-0.516 0-0.063 0.010-0.12 0.031-0.203 0.328-1.719 1.141-3 2.427-3.839 1.297-0.823 2.797-1.302 4.516-1.401h0.724c2.198 0 3.943 0.578 5.182 1.719 0.182 0.203 0.359 0.401 0.542 0.641 0.156 0.219 0.297 0.422 0.375 0.599 0.099 0.182 0.203 0.443 0.26 0.76 0.078 0.339 0.141 0.563 0.182 0.682 0.036 0.141 0.083 0.401 0.099 0.818s0.026 0.661 0.026 0.74v7.042c0 0.5 0.083 0.958 0.219 1.38 0.141 0.417 0.281 0.719 0.422 0.896l0.682 0.901c0.12 0.182 0.177 0.339 0.177 0.479 0 0.161-0.078 0.302-0.24 0.417-1.599 1.401-2.479 2.161-2.615 2.281-0.219 0.182-0.5 0.203-0.839 0.063-0.26-0.224-0.5-0.443-0.703-0.661l-0.411-0.464c-0.083-0.099-0.224-0.281-0.427-0.563l-0.396-0.578c-1.083 1.182-2.141 1.922-3.203 2.219-0.656 0.203-1.458 0.302-2.438 0.302-1.479 0-2.719-0.453-3.682-1.375-0.958-0.922-1.438-2.224-1.438-3.922l-0.068-0.099zM13.818 15.151c0 0.755 0.188 1.359 0.568 1.818 0.38 0.453 0.901 0.682 1.536 0.682 0.063 0 0.146-0.005 0.26-0.026 0.12-0.021 0.182-0.031 0.224-0.031 0.818-0.214 1.438-0.734 1.896-1.568 0.224-0.375 0.38-0.776 0.484-1.214 0.12-0.427 0.156-0.786 0.177-1.068 0.021-0.26 0.021-0.719 0.021-1.339v-0.719c-1.12 0-1.979 0.078-2.563 0.24-1.698 0.479-2.557 1.557-2.557 3.24l-0.047-0.026zM26.031 24.521c0.042-0.078 0.104-0.146 0.177-0.224 0.484-0.328 0.953-0.547 1.401-0.667 0.734-0.177 1.453-0.297 2.151-0.323 0.188-0.016 0.37 0 0.547 0.042 0.865 0.078 1.396 0.224 1.563 0.438 0.083 0.12 0.12 0.307 0.12 0.521v0.203c0 0.677-0.188 1.479-0.557 2.396-0.37 0.922-0.885 1.667-1.536 2.24-0.099 0.083-0.188 0.12-0.266 0.12-0.042 0-0.078 0-0.12-0.016-0.12-0.057-0.141-0.156-0.083-0.318 0.719-1.682 1.073-2.859 1.073-3.521 0-0.198-0.042-0.359-0.115-0.458-0.193-0.219-0.734-0.344-1.635-0.344-0.323 0-0.708 0.021-1.156 0.063-0.484 0.063-0.938 0.12-1.333 0.182-0.12 0-0.198-0.021-0.24-0.063-0.042-0.036-0.052-0.063-0.031-0.099 0-0.026 0.010-0.042 0.031-0.089v-0.078z"></path>
			</svg>
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
				<path d="M9.438 31.401c-0.63-0.422-1.193-0.938-1.656-1.536-0.516-0.615-0.984-1.266-1.422-1.938-1.021-1.495-1.818-3.125-2.375-4.849-0.667-2-0.99-3.917-0.99-5.792 0-2.094 0.453-3.922 1.339-5.458 0.651-1.198 1.625-2.203 2.797-2.906 1.135-0.708 2.453-1.094 3.786-1.12 0.469 0 0.974 0.068 1.51 0.198 0.385 0.109 0.854 0.281 1.427 0.495 0.729 0.281 1.13 0.453 1.266 0.495 0.427 0.156 0.786 0.224 1.068 0.224 0.214 0 0.516-0.068 0.859-0.172 0.193-0.068 0.557-0.188 1.078-0.411 0.516-0.188 0.922-0.349 1.245-0.469 0.495-0.146 0.974-0.281 1.401-0.349 0.521-0.078 1.036-0.104 1.531-0.063 0.948 0.063 1.813 0.266 2.589 0.557 1.359 0.547 2.458 1.401 3.276 2.615-0.349 0.214-0.667 0.458-0.969 0.734-0.651 0.573-1.198 1.25-1.641 2.005-0.573 1.026-0.865 2.188-0.859 3.359 0.021 1.443 0.391 2.714 1.12 3.813 0.521 0.802 1.208 1.484 2.047 2.047 0.417 0.281 0.776 0.474 1.12 0.604-0.161 0.5-0.333 0.984-0.536 1.464-0.464 1.078-1.016 2.109-1.667 3.083-0.578 0.839-1.031 1.464-1.375 1.88-0.536 0.635-1.052 1.12-1.573 1.458-0.573 0.38-1.25 0.583-1.938 0.583-0.469 0.021-0.932-0.042-1.38-0.167-0.385-0.13-0.766-0.271-1.141-0.432-0.391-0.177-0.792-0.333-1.203-0.453-0.51-0.135-1.031-0.198-1.552-0.198-0.536 0-1.057 0.068-1.547 0.193-0.417 0.12-0.818 0.26-1.214 0.432-0.557 0.234-0.927 0.391-1.141 0.458-0.427 0.125-0.87 0.203-1.318 0.229-0.693 0-1.339-0.198-1.979-0.599zM18.578 6.786c-0.906 0.453-1.771 0.646-2.63 0.583-0.135-0.865 0-1.75 0.359-2.719 0.318-0.828 0.745-1.573 1.333-2.24 0.609-0.693 1.344-1.266 2.172-1.677 0.88-0.453 1.719-0.698 2.521-0.734 0.104 0.906 0 1.797-0.333 2.76-0.307 0.854-0.76 1.641-1.333 2.344-0.583 0.693-1.302 1.266-2.115 1.682z"></path>
			</svg>
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
				<path d="M6.427 23.031c-0.911 0-1.739-0.744-1.739-1.651s0.744-1.656 1.739-1.656c1 0 1.751 0.745 1.751 1.656 0 0.907-0.833 1.651-1.745 1.651zM27.776 14.016c-0.183-1.323-1-2.401-2.079-3.224l-0.421-0.333-0.339 0.411c-0.656 0.745-0.921 2.068-0.839 3.057 0.079 0.751 0.317 1.495 0.74 2.073-0.344 0.177-0.76 0.333-1.084 0.505-0.76 0.249-1.5 0.333-2.239 0.333h-21.385l-0.084 0.489c-0.156 1.579 0.084 3.229 0.751 4.724l0.328 0.579v0.077c2 3.313 5.557 4.803 9.437 4.803 7.459 0 13.573-3.224 16.473-10.177 1.901 0.083 3.819-0.412 4.719-2.235l0.24-0.411-0.396-0.251c-1.083-0.661-2.563-0.749-3.801-0.416l-0.027 0.005zM17.099 12.693h-3.239v3.228h3.239zM17.099 8.636h-3.239v3.228h3.239zM17.099 4.495h-3.239v3.229h3.239zM21.057 12.693h-3.219v3.228h3.229v-3.228zM9.063 12.693h-3.219v3.228h3.229v-3.228zM13.099 12.693h-3.197v3.228h3.219v-3.228zM5.063 12.693h-3.199v3.228h3.24v-3.228zM13.099 8.636h-3.197v3.228h3.219v-3.224zM9.041 8.636h-3.192v3.228h3.219v-3.224l-0.021-0.004z"></path>
			</svg>
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
				<path d="M31.907 3.921c-9.552-3.395-19.933-3.676-29.652-0.801-1.629 0.391-2.609 2.052-2.161 3.667 0.532 2.135 1.308 4.588 2.24 6.812 0.016 0.052 0.041 0.027 0.041-0.025-0.135-1.043 0.667-2.36 2.24-2.839 7.557-2.407 15.692-2.297 23.188 0.307 1.145 0.396 2.427-0.229 2.796-1.416 0.932-3 1.308-5.037 1.401-5.547 0.016-0.095-0.068-0.131-0.093-0.157zM8.864 10.521c-1.145 0.239-2.728 0.615-3.916 1.009-2.375 0.819-2.265 3.709-1 4.631 0.093-0.536 0.667-1.265 1.307-1.511 2.371-0.932 4.917-1.489 7.491-1.719-1.308-0.531-2.584-1.292-3.865-2.411zM27.771 16.307c-6.891-3.239-14.801-3.552-21.932-0.869-1.131 0.427-1.839 1.803-1.131 3.109 1.235 2.235 2.641 4.375 4.199 6.401-0.224-0.776 0.172-2.213 1.692-2.683 4.204-1.292 8.615-0.744 11.547 0.443 0.828 0.333 2 0.131 2.657-0.853 1.119-1.724 2.14-3.516 3.052-5.36 0.041-0.083 0-0.145-0.084-0.188zM20.959 26.667c-1.229-0.62-2.355-1.432-3.333-2.401-0.453-0.453-1.12-1.104-1.823-1.88-1.605 0-3.163 0.161-4.829 0.693-1.547 0.484-1.692 2.271-1.015 3.203 1.145 1.427 1.948 2.197 3.229 3.521 1.411 1.385 3.667 1.395 5.093 0.025 1-1 1.615-1.667 2.745-2.948 0.067-0.068 0.041-0.187-0.068-0.213z"></path>
			</svg>
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
				<path d="M29.3 17.425l2.665-2.995h-3.12l-1.085 1.24-1.125-1.24h-5.935v-0.8h2.805v-2.405h-7.56v3.775h-0.025c-0.48-0.55-1.075-0.74-1.77-0.74-1.42 0-2.49 0.97-2.865 2.245-0.9-2.97-4.87-2.88-6.095-0.7v-1.21h-2.74v-1.31h3v-2.055h-5.45v9.22h2.45v-3.875h2.445c-0.075 0.285-0.115 0.59-0.115 0.91 0 3.655 5.13 4.57 6.51 1.185h-2.1c-0.735 1.045-2.29 0.445-2.29-0.73h4.275c0.185 1.525 1.37 2.845 3.005 2.845 0.705 0 1.35-0.345 1.745-0.93h0.025v0.595h10.61l1.105-1.25 1.115 1.25h3.22zM6.965 16.595c0.305-1.315 2.085-1.28 2.325 0zM14.635 19.040c-1.73 0-1.7-3.14 0-3.14 1.63 0 1.725 3.14 0 3.14zM23.025 19.995h-4.72v-8.325h4.75v1.51h-2.805v1.695h2.775v1.405h-2.805v2.235h2.805zM20.73 18.005v-1.22h2.805v-2.2l2.535 2.85-2.535 2.85v-2.28zM27.66 18.52l-1.305 1.475h-1.905l2.28-2.56-2.28-2.56h1.985l1.33 1.465 1.28-1.465h1.925l-2.27 2.55 2.3 2.57h-2.025z"></path>
			</svg>
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
				<path d="M9.427 14.401v5.167h-1.646v-6.495h3.396c1.443 0 1.932 1.021 1.932 1.943v4.552h-1.641v-4.542c0-0.391-0.198-0.625-0.682-0.625zM20.615 14.323c-0.568 0-1 0.286-1.182 0.682-0.104 0.219-0.156 0.458-0.156 0.703h2.531c-0.031-0.703-0.354-1.385-1.193-1.385zM19.276 16.828c0 0.839 0.521 1.464 1.458 1.464 0.724 0 1.083-0.203 1.505-0.625l1.016 0.974c-0.646 0.641-1.333 1.031-2.536 1.031-1.573 0-3.078-0.859-3.078-3.359 0-2.141 1.313-3.349 3.042-3.349 1.755 0 2.766 1.417 2.766 3.271v0.589h-4.172zM16.25 19.557c-1.339 0-1.906-0.932-1.906-1.854v-6.401h1.641v1.771h1.234v1.328h-1.234v3.198c0 0.38 0.177 0.589 0.568 0.589h0.667v1.37zM6.318 12.177h-1.656v-1.578h1.656zM6.323 19.635c-1.24-0.12-1.661-0.87-1.661-1.74v-4.823h1.656v6.568zM26.063 19.495c-1.24-0.12-1.656-0.87-1.656-1.734v-7.38h1.656v9.12zM31.859 11.448c-1.5-7.328-15.724-7.792-24.885-2.214v0.62c9.151-4.708 22.141-4.677 23.323 2.063 0.391 2.234-0.865 4.557-3.109 5.896v1.75c2.703-0.99 5.474-4.198 4.672-8.115zM15.198 24.26c-6.323 0.583-12.917-0.339-13.839-5.276-0.448-2.438 0.667-5.021 2.13-6.625v-0.854c-2.646 2.323-4.083 5.266-3.255 8.74 1.057 4.458 6.714 6.984 15.344 6.146 3.417-0.333 7.891-1.432 10.995-3.141v-2.422c-2.818 1.682-7.49 3.073-11.375 3.432zM27.979 10.865c0-0.078-0.052-0.104-0.156-0.104h-0.104v0.229h0.104c0.104 0 0.156-0.031 0.156-0.109zM28.141 11.432h-0.125c-0.010 0-0.021-0.005-0.026-0.016l-0.167-0.286c-0.005-0.005-0.016-0.010-0.026-0.010h-0.073v0.281c0 0.016-0.016 0.031-0.031 0.031h-0.109c-0.016 0-0.031-0.016-0.031-0.031v-0.714c0-0.036 0.021-0.057 0.052-0.063 0.068-0.005 0.135-0.005 0.203-0.005 0.203 0 0.328 0.057 0.328 0.25v0.010c0 0.12-0.063 0.182-0.151 0.214l0.172 0.292c0 0.005 0.005 0.016 0.005 0.021 0.005 0.010-0.005 0.026-0.021 0.026zM27.849 10.484c-0.302 0-0.547 0.245-0.547 0.547 0.005 0.302 0.25 0.547 0.552 0.547 0.297 0 0.542-0.245 0.542-0.542 0-0.302-0.245-0.552-0.547-0.552zM27.849 11.693c-0.365 0-0.661-0.292-0.661-0.656s0.297-0.661 0.661-0.661c0.359 0 0.661 0.297 0.661 0.661s-0.302 0.656-0.661 0.656z"></path>
			</svg>
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
				<path d="M15.125 24.041c0.077 0.063 0.161 0.131 0.239 0.193-1.567 1.047-3.452 1.651-5.473 1.651-5.464 0-9.891-4.421-9.891-9.885 0-5.459 4.427-9.885 9.885-9.885 2.027 0 3.912 0.604 5.475 1.645-0.079 0.068-0.157 0.136-0.22 0.204-2.337 2.020-3.681 4.953-3.681 8.036s1.339 6.016 3.667 8.041zM22.115 6.115c-2.032 0-3.912 0.604-5.475 1.645 0.079 0.068 0.157 0.136 0.22 0.204 2.337 2.020 3.681 4.953 3.681 8.036 0 3.079-1.339 6.011-3.667 8.041-0.077 0.063-0.161 0.131-0.239 0.193 1.567 1.047 3.447 1.651 5.473 1.651 5.464 0 9.891-4.421 9.891-9.885 0-5.459-4.427-9.885-9.885-9.885zM16 8.235c-0.131 0.099-0.251 0.197-0.375 0.307-2.084 1.813-3.401 4.48-3.401 7.459s1.317 5.645 3.401 7.459c0.12 0.109 0.249 0.213 0.375 0.312 0.131-0.099 0.251-0.203 0.375-0.312 2.084-1.813 3.401-4.48 3.401-7.459s-1.317-5.645-3.401-7.459c-0.12-0.109-0.244-0.208-0.375-0.307z"></path>
			</svg>
		</div>
		<div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="fill-current w-14 h-14">
				<path d="M7.188 0.005l6.333 17.948v-0.010l0.5 1.411c2.786 7.88 4.281 12.104 4.286 12.109 0.005 0 0.427 0.026 0.938 0.057 1.542 0.063 3.453 0.24 4.901 0.411 0.333 0.042 0.62 0.052 0.641 0.042l-6.859-19.453-3.234-9.135c-0.609-1.734-1.13-3.208-1.156-3.266l-0.042-0.12h-6.302zM18.531 0.016l-0.016 7.073-0.010 7.078-0.583-1.646-0.75 15.745c0.74 2.089 1.135 3.203 1.141 3.208s0.427 0.036 0.932 0.057c1.547 0.068 3.453 0.24 4.906 0.417 0.333 0.036 0.625 0.052 0.641 0.036 0.021-0.010 0.026-7.224 0.026-16.010l-0.010-15.958zM7.188 0.005v15.984c0 8.792 0.010 15.995 0.021 16.005s0.552-0.042 1.208-0.115c0.651-0.083 1.557-0.177 2.010-0.214 0.693-0.068 2.76-0.203 3-0.203 0.068 0 0.073-0.359 0.083-6.771l0.010-6.776 0.505 1.417 0.177 0.5 0.76-15.734-0.255-0.729-1.214-3.365z"></path>
			</svg>
		</div>
	</div>
</section>
<section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
				<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
				<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
				<button type="button" className="self-start">Action</button>
			</div>
		</div>
	</div>
</section>

<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
		<h2 className="text-3xl font-bold">Fully compatible with</h2>
		<div className="flex flex-wrap justify-center lg:justify-between">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Angular" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
				<title>Angular</title>
				<path d="M13.24 16.859h5.51l-2.755-6.542zM15.995 0.010l-15.078 5.307 2.297 19.677 12.781 6.995 12.786-6.984 2.297-19.688-15.083-5.302zM25.406 24.406h-3.516l-1.896-4.667h-8l-1.896 4.667h-3.516l9.411-20.865z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Gatsby" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
				<title>Gatsby</title>
				<path d="M16 0.011c-8.901 0-15.989 7.088-15.989 15.989s7.088 15.995 15.989 15.995c8.901 0 15.989-7.093 15.989-15.995s-7.088-15.989-15.989-15.989zM3.484 16.14l12.38 12.376c-6.817 0-12.38-5.563-12.38-12.376zM18.781 28.24l-15.016-15.021c1.251-5.563 6.256-9.735 12.235-9.735 4.011 0.011 7.776 1.917 10.151 5.147l-1.807 1.531c-1.912-2.801-5.089-4.468-8.48-4.453-4.333-0.025-8.197 2.719-9.599 6.819l13.073 13.072c3.197-1.115 5.703-3.896 6.396-7.235h-5.423v-2.364h8.204c0 5.979-4.172 10.989-9.735 12.24z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Plain HTML" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
				<title>Plain HTML</title>
				<path d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Next.js" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
				<title>Next.js</title>
				<path d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Nuxt.js" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
				<title>Nuxt.js</title>
				<path d="M26.297 27.031l0.031-0.063c0.031-0.047 0.052-0.099 0.073-0.156v-0.005c0.099-0.26 0.12-0.536 0.073-0.813v0.010c-0.052-0.292-0.156-0.573-0.313-0.828l0.010 0.010-7.094-12.474-1.083-1.891-8.156 14.365c-0.141 0.25-0.229 0.521-0.276 0.802v0.016c-0.057 0.323-0.021 0.651 0.109 0.953l-0.005-0.010c0.016 0.047 0.042 0.089 0.068 0.135l-0.005-0.005c0.214 0.365 0.667 0.802 1.667 0.802h13.198c0.208 0 1.234-0.042 1.708-0.849zM17.995 14.609l6.479 11.396h-12.953zM31.661 25.188l-9.354-16.479c-0.099-0.177-0.635-1.052-1.578-1.052-0.422 0-1.026 0.182-1.521 1.047l-1.208 2.12 1.073 1.896 1.667-2.953 9.255 16.245h-3.521c0.047 0.271 0.021 0.547-0.073 0.807v-0.010c-0.021 0.057-0.042 0.115-0.073 0.167v-0.005l-0.031 0.063c-0.474 0.807-1.495 0.849-1.693 0.849h5.505c0.203 0 1.219-0.042 1.693-0.849 0.214-0.37 0.359-0.984-0.141-1.844zM9.74 27.078c-0.021-0.042-0.042-0.083-0.063-0.125v-0.005c-0.13-0.302-0.172-0.63-0.115-0.953v0.010h-7.563l11.24-19.776 3.687 6.484 1.073-1.891-3.219-5.667c-0.089-0.161-0.63-1.036-1.568-1.036-0.422 0-1.031 0.182-1.521 1.052l-11.385 20.016c-0.099 0.172-0.568 1.078-0.099 1.885 0.214 0.37 0.667 0.802 1.667 0.802h9.531c-0.99 0-1.453-0.427-1.667-0.802z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="React" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
				<title>React</title>
				<path d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Svelte" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
				<title>Svelte</title>
				<path d="M27.573 4.229c-2.927-4.25-8.656-5.479-13.068-2.802l-7.464 4.745c-2.042 1.281-3.443 3.365-3.854 5.734-0.365 1.969-0.047 4.005 0.891 5.776-0.641 0.964-1.073 2.052-1.266 3.198-0.427 2.406 0.13 4.885 1.547 6.88 2.932 4.24 8.646 5.474 13.068 2.828l7.469-4.75c2.031-1.281 3.427-3.365 3.839-5.734 0.359-1.964 0.042-3.995-0.896-5.755 1.984-3.115 1.88-7.12-0.266-10.12zM13.76 28.172c-2.401 0.625-4.938-0.318-6.349-2.359-0.865-1.198-1.182-2.677-0.932-4.146l0.146-0.708 0.135-0.438 0.401 0.266c0.88 0.667 1.865 1.146 2.917 1.469l0.271 0.094-0.031 0.266c-0.026 0.37 0.083 0.786 0.297 1.104 0.438 0.63 1.198 0.932 1.932 0.734 0.161-0.052 0.318-0.104 0.453-0.188l7.438-4.745c0.375-0.24 0.615-0.599 0.708-1.026 0.083-0.443-0.026-0.896-0.266-1.255-0.443-0.615-1.198-0.891-1.932-0.708-0.161 0.057-0.333 0.12-0.469 0.203l-2.813 1.786c-2.661 1.583-6.099 0.839-7.865-1.708-0.859-1.198-1.198-2.693-0.938-4.146 0.26-1.438 1.12-2.698 2.365-3.469l7.422-4.745c0.469-0.292 0.974-0.505 1.521-0.667 2.401-0.625 4.932 0.318 6.349 2.349 1 1.406 1.281 3.203 0.76 4.849l-0.135 0.443-0.385-0.266c-0.891-0.651-1.88-1.146-2.932-1.469l-0.266-0.078 0.026-0.266c0.026-0.391-0.083-0.802-0.297-1.12-0.438-0.63-1.198-0.896-1.932-0.708-0.161 0.052-0.318 0.104-0.453 0.188l-7.453 4.786c-0.375 0.25-0.615 0.599-0.693 1.036-0.078 0.427 0.026 0.896 0.266 1.24 0.427 0.63 1.203 0.896 1.922 0.708 0.172-0.052 0.333-0.104 0.464-0.188l2.844-1.813c0.464-0.307 0.984-0.531 1.516-0.677 2.417-0.63 4.938 0.318 6.349 2.359 0.865 1.198 1.198 2.677 0.958 4.13-0.25 1.438-1.099 2.698-2.333 3.469l-7.438 4.734c-0.484 0.292-1.005 0.521-1.547 0.677z"></path>
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-label="Vue.js" className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400">
				<title>Vue.js</title>
				<path d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"></path>
			</svg>
		</div>
	</div>
</section>

<div className="w-full dark:bg-gray-500" >
	<div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
		<h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Get Our Updates</h1>
		<p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
		<div className="flex flex-row">
			<input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
			<button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900">Subscribe</button>
		</div>
	</div>
</div>

    </>
  );
}
 const gradientStyles = {
    background: "linear-gradient(to right, #ff0000, #ffff00)"
  };