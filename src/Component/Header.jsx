import React from 'react'




const Header = () => {
  // const link = navItems.map(([id, name, href])=>(
  //   <li key={id}>{name}</li>
  // ))

  return (
    <header id='header' className=' md:h-screen bg-banner bg-contain bg-blend-screen bg-center bg-no-repeat  relative '>
      
      <div className='w-full pt-[140px] md:pt-[150px]  mb-8 flex flex-col items-center justify-center'>
        <div className='text-center mb-6'>
          <h2 className='regular-h2'>Build your <span>faith</span> </h2>
          <h2 className='regular-h2'>Stay connected to <span>Christ</span></h2>
        </div>
        <p className='text-center  w-full md:w-[80%]'>Shama is a leading digital platform that empowers Christians worldwide to grow in faith, knowledge, and community through seamless access to high-quality godly contents</p>
        <div className='mt-[40px] flex rounded  '>
          <input type="email" name="email" className=' text-black text-[14px] rounded-l py-2 px-[3px] md:py-4 md:px-[16px]' id="" placeholder='Enter your Email address'/>
          <button type="submit" className='bg-primary rounded-r text-black font-bold text-[15px] py-2 md:py-4 px-[5px] md:px-[20.5px]'>Join wait list</button>
        </div>
      </div>
    </header>
  )
}

export default Header