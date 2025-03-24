import { useState } from 'react'
import logo from '../needs/logo.svg'
import menu from '../needs/menu.svg'
import close from '../needs/close.svg'
import { motion } from 'motion/react'
function Header() {
  
  const [open, setOpen] = useState(false);

  const variants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },

    visible: {
      x: 0,
      opacity: 1,
      transition:{duration: 0.5, ease: "easeInOut"},
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {duration: 0.5, ease: "easeInOut"},
    }
  }
  return (
    <div className='w-full bg-slate-950 fixed top-0 right-0 lg:flex lg:justify-between lg:items-center lg:py-3 lg:px-40 z-5'>
        <div className='flex items-center justify-between p-4'>
            <img className='w-40 lg:w-36' src={logo} alt=""/>
            {!open 
              ?
            <img 
            className='w-7 lg:hidden' 
            src={menu} 
            alt=''
            onClick={() => setOpen(!open)}
            />
              :
            <img 
            className='w-6 lg:hidden' 
            src={close} 
            alt=''
            onClick={() => setOpen(!open)}
            />
            }
        </div>
        {
          open 
          ?
            <motion.ul 
            variants={variants}
            initial="hidden"
            animate= {open ? "visible" : "hidden"}
            exit="exit"
            className={`flex flex-col lg:flex-row bg-slate-950 fixed lg:relative right-0 w-[70%] lg:w-fit h-full lg:h-fit p-5 gap-12 lg:gap-20 border-l-2 border-b-2 border-none shadow-xl lg:shadow-none rounded-br-xl shadow-white lg:flex`}>
              <li className=''>Home</li>
              <li className='text-slate-300 hover:text-white hover:cursor-pointer transition-all duration-[.3s]'>AboutUs</li>
              <li className='text-slate-300 hover:text-white hover:cursor-pointer transition-all duration-[.3s]'>Features</li>
              <li className='text-slate-300 hover:text-white hover:cursor-pointer transition-all duration-[.3s]'>Solution</li>
            </motion.ul>
          :

            <ul className={`hidden lg:flex lg:flex-row lg:bg-slate-950 lg:fixed lg:relative lg:-0 lg:w-fit lg:h-fit lg:p-5 lg:gap-20  lg:shadow-none lg:flex`}>
                <li className=''>Home</li>
                <li className='text-slate-300 hover:text-white hover:cursor-pointer transition-all duration-[.3s]'>AboutUs</li>
                <li className='text-slate-300 hover:text-white hover:cursor-pointer transition-all duration-[.3s]'>Features</li>
                <li className='text-slate-300 hover:text-white hover:cursor-pointer transition-all duration-[.3s]'>Solution</li>
              </ul>
           
        }
        
    </div>
  )
}

export default Header