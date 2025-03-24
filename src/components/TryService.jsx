
function TryService() {
  return (
    <div className="mt-28 lg:mt-32 mx-5 lg:flex lg:gap-24 lg:ml-40 px-6 py-5 lg:px-30 lg:py-10 bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-600 rounded-4xl lg:mr-40 lg:flex lg:items-center lg:justify-between">
        <div>
            <h3 className="text-4xl font-bold leading-[1.3em] tracking-wider">
                Let’s try our service now!
            </h3>
            <p className="mt-7 text-lg lg:text-xl leading-[1.8em] tracking-wider text-gray-300 lg:pr-40">
                Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>
        <div className="w-[100%] lg:w-[19%]">
            <button className='bg-gradient-to-br from-cyan-200 to-cyan-400 text-black font-bold text-lg lg:text-base w-[50%] lg:w-[100%] px-2 py-4 rounded-lg mt-13 cursor-pointer'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default TryService