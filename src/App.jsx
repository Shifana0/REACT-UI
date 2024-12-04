import img from '../src/assets/pic1.svg'
import img1 from '../src/assets/pic2.png'
import img2 from '../src/assets/pic3.png'
import img3 from '../src/assets/pic4.png'
import img4 from '../src/assets/pic5.png'
import img5 from '../src/assets/pic6.png'
import img6 from '../src/assets/pic7.png'
import img7 from '../src/assets/pic8.png'
import img8 from '../src/assets/pic9.png'
import img9 from '../src/assets/pic10.png'
import img10 from '../src/assets/pic11.png'
import img11 from '../src/assets/query.webp'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from   '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {


  return (
    <>
      <div className='bg-teal-700 w-full h-[130vh] overflow-hidden lg:h-screen'>
        
       <img src={img} alt="" className='ml-[5%] relative top-7 w-[30%] sm:w-[10%]' />
       <div className='text-white bg-teal-500 ml-[18%] w-[135px] text-center text-base rounded-md py-0 hidden sm:block xl:ml-[16%]'>  Get paid to test  </div>
       <nav>

        <ul className='list-none text-white flex gap-9 ml-[37%] mt-[-1.3%] font-semibold hidden xl:block xl:flex'>
        <li>Platform
        </li>
        <li>Solutions</li>
        <li>Customers</li>
        <li>Pricing</li>
        <li>Resources</li>
        </ul>
        {/* search */}
        <FontAwesomeIcon icon={faBars} className='text-white ml-[90%] lg:hidden ' />
        <button className='border-2 border-white text-white p-4 ml-[76%] relative top-[-40px] rounded-md font-bold hidden
        xl:block	'>Log in</button>
        <p className='font-bold text-white ml-[85%] relative top-[-77px] hidden xl:block'>Sign up</p>
       </nav>
       <img src={img4} alt="" className='w-[210px] ml-[-2%] mt-[2%] hidden lg:block' />
       <img src={img1} alt="" className='w-[7%] mt-[-14%] ml-[12%] hidden lg:block' />
       <img src={img3} alt="" className='w-[11%] ml-[9%] mt-[-2%] hidden lg:block'/>
       <img src={img2} alt=""  className='w-[15%] mt-[-5%] ml-[-2%] hidden lg:block'/>
       <img src={img5} alt=""  className='w-[5%] ml-[11%] mt-[-11%] hidden lg:block'/>
       <div className='text-white bg-teal-500 w-[90%] mt-[25%] ml-[5%] text-center rounded-3xl p-3 font-bold text-sm
       sm:w-[30%] sm:ml-[37%] sm:mt-[-21%]'>NEW! Recordings on unmoderated tests.   | Learn more</div>
       <p className='text-white flex justify-center text-center mt-[5%] text-[41px] leading-10 font-serif
       lg:text-6xl lg:ml-[5%] lg:mt-[2%] md:mt-[22%] '>Your go-to user <br /> research platform</p>

     <p className='text-white text-center text-base mt-[2%] sm:text-2xl text-center'>The best teams use Lyssna so they can deeply <br /> understand their
         audience and move in the right direction — faster.</p> 
         <button className='bg-white p-4 flex justify-center font-semibold ml-[32%] rounded-md mt-[14%]
         lg:mt-[2%] lg:ml-[46%] md:mt-[7%] md:ml-[47%]'>Sign up for free</button>
         <p className='text-slate-200 flex justify-center ml-[9%] lg:ml-[2%]'>No credit card required</p>
         <img src={img6} alt="" className='w-[13%] ml-[81%] mt-[-29%] hidden lg:block ' />
         <img src={img8} alt="" className='w-[12%] ml-[90%] mt-[-7%] hidden lg:block' />
         <img src={img7} alt="" className='w-[8%] ml-[82%] mt-[-6%] hidden lg:block' />
         <img src={img9} alt="" className='w-[20%] ml-[84%] mt-[-2%] hidden lg:block' />
         <img src={img10} alt="" className='w-[6%] ml-[78%] mt-[-19%] hidden lg:block' />

         <img src={img11} alt="" className='mt-[12%] lg:hidden lg:w-[10% md:w-[70%] md:ml-[16%]' />
      </div>
    </>
  )
}

export default App
