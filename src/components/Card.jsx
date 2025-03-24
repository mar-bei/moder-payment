import card from '../needs/card.png'


function Card() {
  return (
    <div className='mt-28 lg:mt-32 mx-5 lg:flex lg:items-center lg:gap-32 lg:pl-40'>
        <div className='flex flex-col gap-7 lg:w-[50%] lg:pr-2'>
            <h3 className='text-4xl lg:text-5xl font-bold tracking-wide leading-[1.7em]'>
                Find a better card deal in few easy steps.
            </h3>
            <p className='text-lg lg:text-base leading-[2em] text-gray-300'>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            <button className='bg-gradient-to-br from-cyan-200 to-cyan-400 text-black font-bold text-lg lg:text-base w-[40%] lg:w-[20%] px-2 py-3 rounded-lg mt-6 cursor-pointer'>
                Get Started
            </button>
        </div>


        <div className='mt-20 lg:w-[50%] lg:pr-32'>
            <img src={card} alt=""/>
        </div>
    </div>
  )
}

export default Card