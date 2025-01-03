import React from 'react';
import Ecoride from '../assets/EcoRide.png';
/*import { FaHiking, FaShuttleVan, FaLeaf } from 'react-icons/fa';*/


const Services = () => {
  return (
    <main class="mx-auto max-w-4xl">
   
   <section id="rockets" class="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6">
      <h2 class="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Our Rockets
      </h2>
      <ul class="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
        <li
          class="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <img src="./img/rocketman.png" alt="Explorer" class="mb-6 w-1/2" />
          <h3 class="text-center text-3xl text-slate-900 dark:text-white">
            Explorer
          </h3>
          <p class="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $
          </p>
          <p class="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Affordable Exploration
          </p>
        </li>
        <li
          class="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <img src="./img/rocketride.png" alt="Adventurer" class="mb-6 w-1/2" />
          <h3 class="text-center text-3xl text-slate-900 dark:text-white">
            Adventurer
          </h3>
          <p class="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $$
          </p>
          <p class="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Best Selling Rocket!
          </p>
        </li>
        <li
          class="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <img src="./img/rocketlaunch.png" alt="Infinity" class="mb-6 w-1/2" />
          <h3 class="text-center text-3xl text-slate-900 dark:text-white">
            Infinity
          </h3>
          <p class="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
            $$$
          </p>
          <p class="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
            Luxury Starship
          </p>
        </li>
      </ul>
    </section>

    <hr class="mx-auto w-1/2 bg-black dark:bg-white" />
</main>
  );
};

export default Services;
