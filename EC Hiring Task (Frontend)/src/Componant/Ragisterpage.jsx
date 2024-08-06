import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
function Ragisterpage() {
  return (
    <section class="flex flex-col justify-center items-center px-6 py-12 lg:px-8">
      <div class="box flex min-h-96  bg-slate-100 flex-col justify-center p-8 lg:px-8 border-solid border-neutral-400 border-2 ">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img
            class="mx-auto h-10 w-auto pr-16 mt-2 -mb-6"
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
            alt="Flipkart Company"
          />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registration
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-3" action="#" method="POST">
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div class="mt-2">
                <input
                  id="name"
                  name="name"
                  type="email"
                  autocomplete="name"
                  required
                  class="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md pl-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Create a Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="createpassword"
                  name=" Create a password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md pl-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm a Password
                </label>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="Confirm a password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md pl-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white mt-5 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register Now
              </button>
            </div>
          </form>

          <div class="mt-6 text-center text-sm text-gray-500">
            <p>
              Already have an account?
              <Link
                to="/login"
                class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 pl-1"
              >
                Login now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ragisterpage;
