import b1 from '../needs/airbnb.png'
import b2 from '../needs/binance.png'
import b3 from '../needs/coinbase.png'
import b4 from '../needs/dropbox.png'

function Brands() {
    const brands = [
        {
            id: 1,
            img: b1,
        },
        {
            id: 2,
            img: b2,
        },
        {
            id: 3,
            img: b3,
        },
        {
            id: 4,
            img: b4,
        },
    ];
  return (
    <div className='mt-28 lg:mt-32 mx-5 lg:flex lg:justify-between lg:pl-60 lg:pr-50 grid grid-cols-2 gap-y-4 place-items-center'>
        {brands.map((b,i) => (
            <div 
            className=''
            key={i}>
                <img
                className={`w-32 ${b.id == 3 ? 'lg:w-40 lg:-mt-2' : 'lg:w-50'} lg:object-contain `} 
                src={b.img}/>
            </div>
        ))}
       
    </div>
  )
}

export default Brands