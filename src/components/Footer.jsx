import logo from '../needs/logo.svg'
import { FaRegCopyright } from "react-icons/fa";
import instagram from '../needs/instagram.svg'
import facebook from '../needs/facebook.svg'
import twitter from '../needs/twitter.svg'
import linkedin from '../needs/linkedin.svg'

function Footer() {
  return (
    <div className='mt-28 lg:mt-32 mx-5 lg:flex lg:gap-24 lg:pl-40 lg:pr-40 flex flex-col gap-5 bg-slate-950'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:gap-0 gap-10'>

            <div className='flex flex-col gap-3'>
                <img className='w-70' src={logo} alt="logo"/>
                <p className='text-gray-300 '>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>

            <div>
                <h4 className='text-xl font-bold tracking-wider'>
                    Usefull Links
                </h4>
                <ul className='mt-4 flex flex-col gap-4 text-gray-300'>
                    <li>Content</li>
                    <li>How it Works</li>
                    <li>Create</li>
                    <li>Explore</li>
                    <li>Terms & Services</li>
                </ul>
            </div>
            <div>
                <h4 className='text-xl font-bold tracking-wider'>
                    Community
                </h4>
                <ul className='mt-4 flex flex-col gap-4 text-gray-300'>
                    <li>Help Center</li>
                    <li>Partners</li>
                    <li>Suggestions</li>
                    <li>Blog</li>
                    <li>Newsletters</li>
                </ul>
            </div>
            <div>
                <h4 className='text-xl font-bold tracking-wider'>
                    Partner
                </h4>
                <ul className='mt-4 flex flex-col gap-4 text-gray-300'>
                    <li>Our Partner</li>
                    <li>Become a Partner</li>
                </ul>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-5 mt-5'>
            <div className='flex items-center gap-1 lg:gap-2 text-sm text-gray-300'>
                <div className='flex items-center gap-2'>
                    <p>Copyright</p>
                    <FaRegCopyright />
                </div>
                <p classNamw="">
                    2021 HooBank. All Rights Reserved.
                </p>
            </div>

            <div className='flex items-center gap-8 pb-5'>
                <img src={instagram} alt="instagram"/>
                <img src={facebook} alt="facebook"/>
                <img src={twitter} alt="twitter"/>
                <img src={linkedin} alt="linkedin"/>
            </div>
        </div>
    </div>
  )
}

export default Footer