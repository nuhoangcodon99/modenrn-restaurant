import images from '../../constants/images.js'
import { SubHeading } from '../../components/SubHeading/SubHeading.js'

export const Findus = () => {
    return (
        <div className='app__findus app__bg app__wrapper section__padding' id='landing'>
            <div className='app__wrapper_info'>
                <SubHeading title='Contact' />
                <h1 className='headtext__cormorant'>Find Us</h1>
                <div className='py-16'>
                    <p className='p__opensans text-[var(--color-grey)] pb-8'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                    <p className='p__cormorant text-[var(--color-golden)]'>Opening Hours</p>
                    <p className='p__opensans py-4'>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
                </div>
                <button className='py-2 px-8 bg-[var(--color-golden)]' type="button">View Us</button>

            </div>

            <div className='app__wrapper_img'>
                <img src={images.findus} alt="findus_img" />
            </div>
        </div>
    )
}