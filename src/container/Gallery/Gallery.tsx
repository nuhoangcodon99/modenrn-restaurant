import './Gallery.css'
import images from '../../constants/images'
import { SubHeading } from '../../components/SubHeading/SubHeading'

export const Gallery = () => {
    return (
        <div className='app__gallery'>
            <div className='app__gallery-text '>
                <SubHeading title='Instagram'/>
                <h1 className='headtext__cormorant'>Photo Gallery</h1>
                <p className='p__opensans app__gallery-text_subtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                <button className='custom__button' type="button"><a href="#landing">View More</a></button>
            </div>
            <div className='app__gallery-img'>
                <img src={images.gallery04} alt="" />
                <img src={images.gallery03} alt="" />
                <img src={images.gallery02} alt="" />
                <img src={images.gallery01} alt="" />
            </div>
        </div>
    )
}