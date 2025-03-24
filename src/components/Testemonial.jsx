import quotes from '../needs/quotes.svg'
import p1 from '../needs/people01.png'
import p2 from '../needs/people02.png'
import p3 from '../needs/people03.png'
function Testemonial() {
    const people = [
        {
            id: 1,
            name: "Herman Jensen",
            job: "Founder & Leader",
            img: p1,
            desc: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
        },

        {
            id: 2,
            name: "Steve Mark",
            job: "Founder & Leaderr",
            img: p2,
            desc: "Money makes your life easier. If you're lucky to have it, you're lucky."
        },

        {
            id: 3,
            name: "Kenn Gallagher",
            job: "Founder & Leader",
            img: p3,
            desc: "It is usually people in the money business, finance, and international trade that are really rich."
        },

        
    ]
  return (
    <div className="mt-28 lg:mt-32 mx-5 lg:flex lg:flex-col lg:items-center lg:gap-9 lg:pl-40">
        <div className='lg:flex lg:items-center lg:gap-32 lg:pr-32'>
            <h3 className="text-4xl lg:text-6xl leading-widest leading-[1.5em] font-bold">
                What people are saying about us
            </h3>
            <p className="mt-5 text-lg lg:text-xl tracking-wider leading-[1.8em] text-gray-300">
                Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-40 lg:gap-12 mt-32 lg:h-full lg:mt-7 lg:pr-32">
            {people.map((p, i) => (
                <div
                    className="flex flex-col lg:pl-9 lg:pr-3 lg:py-15 lg:w-[85%] lg:rounded-3xl lg:h-full flex-grow min-h-[20em] hover:bg-gradient-to-br hover:from-slate-300/30 hover:to-slate-950 transition-[all] duration-[.4s] hover:cursor-pointer" 
                    key={i}
                >
                    <img className="w-12" src={quotes} alt="" />
                    <p className="pt-11 lg:h-full text-xl lg:text-lg font-[600] tracking-widest leading-[1.8em] flex-grow">
                        {p.desc}
                    </p>
                    <div className="flex items-center gap-9 mt-11">
                        <img className="w-15 h-15 lg:w-12 lg:h-12" src={p.img} alt="" />
                        <div>
                            <h4 className="text-lg lg:text-base tracking-widest font-[700]">{p.name}</h4>
                            <p className="text-base lg:text-sm font-[300] tracking-wider pt-0 lg:pt-0">
                                {p.job}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    </div>
  )
}

export default Testemonial