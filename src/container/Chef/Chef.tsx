import './Chef.css'
import images from '../../constants/images'
import { SubHeading } from '../../components/SubHeading/SubHeading'

export const Chef = () => {
    return (
        <div className='app__chef app__bg app__wrapper section__padding' id='chef'>
            <div className='app__chef-img app__wrapper_img'>
                <img src={images.chef} alt="" />
            </div>

            <div className='app__chef-word app__wrapper_info'>
                <div>
                    <SubHeading title="Chef's word" />
                    <h1 className='headtext__cormorant'>What we believe in</h1>
                </div>

                <div className='app__chef-word_quotes'>
                    <div>
                        <img src={images.quote} alt="" />
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</p>
                    </div>
                    <p> Auctor sit iaculis in arcu.
                        Vulputate nulla lobortis mauris eget sit.
                        Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.
                        Congue iaculis integer curabitur semper sit nunc.</p>
                </div>

                <div className='app__chef-word_name'>
                    <h1>Kevin Luo</h1>
                    <p>Chef & Founder</p>
                </div>
                <div className='app__chef-word_sign'>
                    <img src={images.sign} alt="" />
                </div>
            </div>
        </div>
    )
}