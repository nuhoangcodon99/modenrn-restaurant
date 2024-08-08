import './Header.css'
import { SubHeading } from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'

export const Header = () => {
    return (
        <div className='app__header app__wrapper section__padding' id='home'>
            <div className='app__wrapper_info'>
                <SubHeading title='Chase the new Flavour'/>
                <h1>The Key To Fine Dining</h1>
                <p className='p__opensans'>Sit tellus lobortis sed senectus vivamus molestie. 
                Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
                <button className='py-2 px-8 bg-[var(--color-golden)]' type="button"><a href="#menu">Explore Menu</a></button>
            </div>

            <div className='app__wrapper_img'>
                <img src={images.welcome} alt="header img" />
            </div>
        </div>
    )
}