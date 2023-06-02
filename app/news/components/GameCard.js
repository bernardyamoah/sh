'use client'
import React, { Suspense } from 'react';
import Image from 'next/image';
import { getGames } from '@/lib/getGames';

import Loading from '@/app/books/loading';


export default async function GameCard() {
  const games = await getGames();



  const content = (
    <>
    <Suspense fallback={<Loading />}>
      {games.map((game) => (
        <div key={game.id}>
          <div className='aspect-video relative'>
        <Image
        className="relative z-10 object-cover w-full rounded-md "
        fill
        src={game.background_image}
        alt={game.name}
      
      />
      </div>
      
      <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
      <a
      href="#"
      className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
      >
      {game.name}
      </a>
      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
      {game.description}
      </p>
      <p className="mt-3 text-sm text-blue-500">{game.released}</p>
      </div>
      </div>
      ))}
      </Suspense>
    </>
  );

  return content;
}
