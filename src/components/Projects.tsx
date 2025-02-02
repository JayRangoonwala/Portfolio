import React from 'react'

const Projects:React.FC = () => {
  return (
    <section className='mt-5 px-16'>
        <div className='flex items-center justify-between cursor-pointer'>
            <img src="./urlshortner.jpg" alt="URL SHORTNER LOGO" className='h-[150px] w-[160px]'/>
        <div className='flex flex-col items-start px-4 py-3 bg-slate-700 h-[150px] w-full rounded-r-lg'>
            <h1 className='text-xl'>URL SHORTNER</h1>
            <span className='text-xs text-slate-400'>To convert long URLs into short url,Easy-to-remember links. It is commonly used for sharing links on social media, messaging apps, or emails where space is limited.</span>
            <ul className='flex gap-3 mt-4'>
                <li className='bg-slate-900 p-[6px] px-[8px] text-xs rounded-xl'>REACT</li>
                <li className='bg-slate-900 p-[6px] px-[8px] text-xs rounded-xl'>NODE JS</li>
                <li className='bg-slate-900 p-[6px] px-[8px] text-xs rounded-xl'>EXPRESS</li>
                <li className='bg-slate-900 p-[6px] px-[8px] text-xs rounded-xl'>MONGODB</li>
                <li className='bg-slate-900 p-[6px] px-[8px] text-xs rounded-xl'>JAVASCRIPT</li>
                <li className='bg-slate-900 p-[6px] px-[8px] text-xs rounded-xl'>CSS</li>
            </ul>
            </div>
        </div>
    </section>
  )
}

export default Projects
