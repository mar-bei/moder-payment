import star from '../needs/Star.svg'
import shield from '../needs/Shield.svg'
import send from '../needs/Send.svg'
function Business() {
    const features = [
        {
            id: 1,
            title: "Rewards",
            icon: star,
            paragraph: "The best credit cards offer some tantalizing combinations of promotions and prizes", 
        },

        {
            id: 2,
            title: "100% Secured",
            icon: shield,
            paragraph: "We take proactive steps make sure your information and transactions are secure.", 
        },

        {
            id: 3,
            title: "Balance Transfer",
            icon: send,
            paragraph: "A balance transfer credit card can save you a lot of money in interest charges."
        }

    ]

  return (
    <div className='mt-28 lg:mt-32 mx-5 lg:flex lg:gap-24 lg:pl-40'>
        <div className='flex flex-col gap-7 lg:w-[50%] lg:pr-2'>
            <h3 className='text-5xl lg:text-5xl font-bold tracking-wide leading-[1.4em]'>
                You do the business, we’ll handle the money.
            </h3>
            <p className='text-lg lg:text-base leading-[2em] text-gray-300'>
                With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
            </p>

            <button className='bg-gradient-to-br from-cyan-200 to-cyan-400 text-black font-bold text-lg lg:text-base w-[40%] lg:w-[20%] px-2 py-3 rounded-lg mt-6 cursor-pointer'>
                Get Started
            </button>
        </div>


        <div className='flex flex-col gap-32 lg:gap-10 mt-24 lg:mt-0 lg:w-[50%] lg:pr-32'>
            {features.map((f,i) => (
                <div className='flex items-center gap-8 pl-8 pr-3 ' key={i}>
                    <img className={`${f.id == 1 ? 'lg:w-[1.5em]' : f.id == 3 ? 'lg:w-[1.2em]' : 'lg:w-[1.4em]'}`} src={f.icon} alt=""/>
                    <div>
                        <h3 className='text-lg lg:text-lg font-bold'>{f.title}</h3>
                        <p className='text-xl lg:text-base text-gray-300 tracking-wider leading-[1.8em]'>{f.paragraph}</p>
                    </div>
                </div>
            ))  
            }
            
            
        </div>
    </div>
  )
}

export default Business