import React from 'react'
import { coreValues, weAre } from '../constant/Data'
import { android,arrow,apple, iphone, iphonemobile } from '../assets/Images'

const Section = () => {
  return (
    <section id='section'>
      <div id='whoweare' className='text-center md:mt-[50px]'>
        <div>
          <h3 className='regular-h3'>Who we are</h3>
          <p className='mt-8'>
            <span>SHAMA</span> is a platform made to deliver high-quality <span>Christian content</span>, including 
            videos and audios, to users. At Shama, we give access to sermons, worship music, podcasts, and other faith-based materials to 
            support the spiritual growth and engagement of our audience.
          </p>
        </div>
        <div  className='mt-8'>
          <ul className='text-center gap-8'>
            {weAre.map((we) => (
              <li className='gap-8' key={we.id}>
                <div className='bt-[18px]  w-full pb-[16px] md:pb-[18px] mb-[33px] md:mb-[72px]'>
                  <img src={we.icon} alt="icon" className='w-[40px] md:w-[92px] mx-auto h-[40px] md:h-[92px] mt-[16px] md:mt-12' />
                </div>
                <p className='px-[19px]'>{we.desc}</p>
              </li>
            ))}
          </ul>

        </div>
      </div>

      <div id='value'>
        <h3 className='regular-h3 text-center'>Core values</h3>
        <ul className='grid mt-[16px] md:mt-[80px] md:grid-cols-3 gap-[28px]'>
          {coreValues.map((values) => (
            <li className='box' key={values.id}>
              <div className='bt-[18px] border-b-2 w-full border-primary pb-[16px] md:pb-[18px] mb-[33px] md:mb-[72px]'>
                <h4 className='regular-h4'>{values.title}</h4>
                <img src={values.icon} alt="icon" className='w-[40px] md:w-[92px] mx-auto h-[40px] md:h-[92px] mt-[16px] md:mt-4' />
              </div>
              <p className='px-[19px]'>{values.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className=''>
        <div id='mission' className=' text-center pt-[70px] md:pt-[150px]'>
          <h3 className='regular-h3'>Our mission</h3>
          <p className='md:mt-8'>Our mission is to create a centralized digital space where Christians can easily stream, download, and engage with diverse Christian content. We aim to inspire spiritual growth, foster community connections, and
            provide enriching resources that support and enhance the Christian journey.
          </p>
        </div>

        <div id='vision' className='py-[70px] md:py-[150px] text-center'>
          <h3 className='regular-h3'>Our vision</h3>
          <p className='md:mt-8'>
            To be the leading digital platform that empowers Christians worldwide to grow in faith, knowledge, and community through seamless access to high-quality godly contents.
          </p>
        </div>

      </div>

      <div id='ambassador' className='pt-[80px] md:pt-[150px]'>
        <div  className='bg-primary w-full md:flex text-center min-h-[300px] md:h-[392px] md:rounded-[32px] rounded-[10px] max-sm:py-[28px]  px-[20px] md:px-[30px] '>
          <div className=' h-full w-full md:text-left flex flex-col md:items-start justify-center'>
            <div>
              <img src= {iphonemobile} className='h-[148px] w-[60px] md:hidden mx-auto' alt="Iphone" />
              <div className='mt-[16px] mb-[25px] md:mb-[50px]'>
                <p className='text-[17.7px] text-black md:text-[32px] font-bold'>Coming soon...</p>
                <p className='text-[32px] font-bold text-black hidden md:flex'>This is a place holder for more contents</p>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 '>
              <button className='flex flexCenter gap-2 py-[10px] px-[10px] md:py-[16px] rounded-[47px] md:px-[28px] bg-black '>
                  <p className='text-[14px] md:text-[20px] leading-10 font-semibold'>Download for android</p>
                  <img src={arrow} alt="arrow" className='md:w-[20px] w-[9px] md:h-[20px]' />
                  <img src={android} alt="Android" className=' w-[20px] h-[22px] md:w-[40px] md:h-[50px]' />
              </button>
              <button className='flex flexCenter gap-2 py-[10px] px-[10px] md:py-[16px] rounded-[47px] md:px-[28px] bg-black '>
                  <p className='text-[14px] md:text-[20px] leading-10 font-semibold'>Download for android</p>
                  <img src={arrow} alt="arrow" className='md:w-[20px] w-[9px] md:h-[20px]' />
                  <img src={apple} alt="Android" className=' w-[20px] h-[22px] md:w-[40px] md:h-[50px]' />
              </button>
            </div>
            
          </div>
          <img src={iphone} alt="Iphone" className='w-[343px] hidden md:flex' />
        </div>
      </div>
    </section>
  )
}

export default Section