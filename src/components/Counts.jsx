import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

function Counts() {
  const count1 = useMotionValue(0)
  const rounded1 = useTransform(() => Math.round(count1.get()))
  
  const count2 = useMotionValue(0)
  const rounded2 = useTransform(() => Math.round(count2.get()))
  

    useEffect(() => {
         const controls2 = animate(count1, 3800, { duration: 5 })
        return () => controls2.stop()
    }, [])


    useEffect(() => {
      const controls2 = animate(count2, 230, { duration: 5 })
     return () => controls2.stop()
  }, [])

 
  return (
    <div className='mx-5 mt-24 flex flex-col gap-5 lg:flex-row lg:gap-0 lg:justify-between lg:pl-40 lg:pr-24 lg:pb-5'>
        <div className='flex items-center gap-4 lg:after:content-[""] lg:after:absolute lg:after:w-[0.1em] lg:after:h-[0.8em] lg:flex lg:justify-center lg:items-center lg:after:bg-slate-300 lg:after:left-[33.55%]'>
        <div className="flex items-center gap-1">
            <motion.h3 className='text-4xl font-bold '>{rounded1}</motion.h3>
            <h3 className="text-3xl font-bold">+</h3>
          </div>
        <p className='text-lg lg:text-base lg:pt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-100 tracking-wider'>USER ACTIVE</p>
        </div>

        <div className='flex items-center gap-4 lg:after:content-[""] lg:after:absolute lg:after:w-[0.1em] lg:after:h-[0.8em] lg:flex lg:justify-center lg:items-center lg:after:bg-slate-300 lg:after:left-[67%]'>
          <div className="flex items-center gap-1">
            <motion.h3 className='text-4xl font-bold '>{rounded2}</motion.h3>
            <h3 className="text-3xl font-bold">+</h3>
          </div>

          <p className='text-lg lg:text-base lg:pt-1 text-transparent bg-clip-text relative bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-100 tracking-wider '
          >
            TRUSTED BY COMPANY
          </p>
        </div>

        <div className='flex items-center gap-4 '>
        <div className="flex items-center gap-1">
            <h3 className="text-4xl font-bold">$</h3>
            <motion.h3 className='text-4xl font-bold '>{rounded2}</motion.h3>
            <h3 className="text-3xl font-bold">M+</h3>
          </div>
          <p className='text-lg lg:text-base lg:pt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-200 to-cyan-100 tracking-wider'
          >
            TRANSACTION
          </p>
        </div>
    </div>
  )
}

export default Counts