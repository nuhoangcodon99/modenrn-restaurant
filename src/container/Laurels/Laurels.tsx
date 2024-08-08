import './Laurels.css'
import '../../components/AwardCard/AwardCard'
import { SubHeading } from '../../components/SubHeading/SubHeading'
import { images } from '../../constants'
import { AwardCard } from '../../components/AwardCard/AwardCard'

export const Laurels = () => {
    return (
        <div className='app__bg app__laurels section__padding'>
            <img className='app__laurels-logo' src={images.logo} alt="" />

            <div className='app__laurels-main_content app__wrapper flex__center' id='blog'>
                <div className='app__laurels-text app__wrapper_info'>
                    <div>
                        <SubHeading title='Awards & recognition' />
                        <h1 className='headtext__cormorant'>Our Laurels</h1>
                    </div>
                    <div className='app__laurels-award_card'>
                        <AwardCard image={images.award01} title='Bib Gourmond' subTitle='Lorem ipsum dolor sit amet, consectetur.' />
                        <AwardCard image={images.award01} title='Bib Gourmond' subTitle='Lorem ipsum dolor sit amet, consectetur.' />
                        <AwardCard image={images.award01} title='Bib Gourmond' subTitle='Lorem ipsum dolor sit amet, consectetur.' />
                        <AwardCard image={images.award01} title='Bib Gourmond' subTitle='Lorem ipsum dolor sit amet, consectetur.' />
                    </div>
                </div>

                <div className='app__wrapper_img'>
                    <img src={images.laurels} alt="" />
                </div>
            </div>
        </div>

    )
}