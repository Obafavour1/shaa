import React from 'react'
import { quickLinks } from '../constant/Data'
import { facebook, inst, twitter } from '../assets/Images/index'
// import { twitter, inst, facebook } from '../assets/Images'

const Footer = () => {
  return (
    <footer id='footer' className='flex pt-[50px] md:pt-[150px] '>
      <div className=' flex max-sm:flex-wrap w-full bg-primary py-[31px] md:py-[80px] px-5 lg:px-[62px] mx-auto  min-h-[182px] md:h-[430px] justify-between'>
        <div className='mb-4'>
          <h4 className='footer-h'>Quick Links</h4>
          <ul className='flex flex-col gap-4 text-black'>
            {quickLinks.map((link) =>(
              <a key={link.id} href={link.href} className='link'>{link.name}</a>
            ))}
          </ul>
        </div>

        <div>
          <h4 className='footer-h'>Contact us</h4>
          {/* <ul>
            {socials.map((social) =>(
              <a key={social.id} href="">{social.name}</a>
            ))}
          </ul> */}
          <ul className='flex gap-4'>
            <li><a href=""><img src={facebook} alt="" className='w-[30px] h-[30px]' /></a></li>
            <li><a href=""><img src={twitter} alt="" className='w-[30px] h-[30px]' /></a></li>
            <li><a href=""><img src={inst} alt="" className='w-[30px] h-[30px]' /></a></li>
          </ul>
        </div>

        <div className='max-sm:my-[20px] max-sm:mx-auto flex rounded h-[50px]  '>
          <input type="email" name="email" className=' text-black rounded-l py-2 px-[3px] md:py-4 md:px-[16px]' id="" placeholder='Enter your Email address' />
          <button type="submit" className='bg-black rounded-r text-white font-bold text-[16px] py-2 px-[8px] md:py-3 md:px-[20.5px]'>Join wait list</button>
        </div>
      </div>

      
    </footer>
  )
}

export default Footer