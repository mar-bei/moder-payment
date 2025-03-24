import bill from '../needs/bill.png'
import apple from '../needs/apple.svg'
import google from '../needs/google.svg'

function Bills() {
  return (
    <div className='mt-28 mx-5 flex flex-col lg:flex-row lg:items-center lg:justify-center gap-9 lg:px-32 lg:gap-[7em]'>
        <div className='order-[2] mt-8 lg:order-none'>
            <img className='lg:w-[78em]' src={bill} alt=""/>
        </div>
        <div className=''>
            <h3 className='text-4xl lg:text-5xl font-bold tracking-wider leading-[1.5em]'>
                Easily control your billing & invoicing.
            </h3>
            <p className='mt-7 text-xl lg:text-base tracking-wider lg:pr-5 leading-[1.9em] text-gray-300'>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
            </p>

            <div className='flex items-center gap-7 lg:gap-12 mt-6 lg:mt-8'>
                <img className='w-[10em] lg:w-[8em]' src={apple} alt=""/>
                <img className='w-[10em] lg:w-[8em]' src={google} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Bills