'use client'
import MeetingTypeList from '@/components/MeetingTypeList';
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [currentTime, setCurrentTime] = useState('');
const [currentDate, setCurrentDate] = useState('');

useEffect(() => {
  const now = new Date();

  // Get hours and minutes
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  // Get date in "Month Day, Year" format
  const options = { month: 'long', day: '2-digit', year: 'numeric' } as const;
  const formattedDate = now.toLocaleDateString('en-US', options);

  // Set state
  setCurrentTime(formattedTime);
  setCurrentDate(formattedDate);
}, []);
  return (
    <section className='flex size-full flex-col gap-10 text-white mt-16'>

    <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
      <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
        <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at {}</h2>
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-extrabold lg:text-7xl'>{currentTime}</h1>
          <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{currentDate}</p>
        </div>
      </div>
    </div>
    <MeetingTypeList/>
    </section>
  )
}

export default Home