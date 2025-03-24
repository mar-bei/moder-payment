import robot from '../needs/robot.png'
import discound from '../needs/discount.svg'
import arrow from '../needs/arrow-up.svg'
function Hero() {
  return (
    <div className='pt-24 lg:flex lg:justify-between lg:relative'>
        <div className='mx-5 lg:pl-40 lg:mt-16'>
            <div className='flex items-center gap-1 bg-gradient-to-r from-slate-300/20 to-slate-950 lg:bg-none p-2 lg:px-0'>
                <img 
                className='w-10'
                src={discound} 
                alt=""
                />
                <h4 className='text-slate-300'><span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH</span>  ACCOUNT</h4>
            </div>
            <h2 
            className='font-bold text-6xl lg:text-[5em] leading-[1.4em] font-[Roboto] tracking-wide mt-5'>
                The Next 
                <h2 
                className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-100 to-cyan-50'>
                    Generation
                </h2>
                    Payment Method.
            </h2>
            <p className='tracking-wide mt-5 text-gray-300 text-xl lg:text-base leading-[2em] lg:leading-[2.2em] lg:tracking-widest lg:pr-[52em] lg:mt-9'>
                Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
                We examine annual percentage rates, annual fees.
            </p>
        </div>

        <div className='mt-10'>
            <img
            className='w-full lg:w-[40em] lg:absolute lg:right-0'
            src={robot} 
            alt=""/>
        </div>

        <div className='flex justify-center items-center mt-16 w-40 h-40 mx-auto p-[0.15em] bg-gradient-to-t from-cyan-300 to-cyan-200 rounded-full lg:absolute lg:right-[40em] lg:top-[10em]'>
            <div className='bg-slate-950 h-full w-full rounded-full flex justify-center items-center'>
                <h1 className='text-transparent bg-clip-text bg-gradient-to-tl from-cyan-300 via-cyan-200 to-slate-100'>Get
                    
                    <img className='inline' src={arrow} alt=""/>
                    <h2>Started</h2>
                </h1>
            </div>
            
        </div>
    </div>
  )
}


export default Hero