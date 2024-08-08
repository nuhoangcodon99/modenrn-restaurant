import './AwardCard.css'

interface I_AwardCard {
    image: string;
    title: string;
    subTitle: string;
}

export const AwardCard: React.FC<I_AwardCard> = ({ image, title, subTitle }) => {
    return (
        <div className="app__awardcard">
            <img src={image} alt="award_card" />
            <div className='app__awardcard-text'>
                <p className='app__awardcard-text_title p__cormorant'>{title}</p>
                <p className='app__awardcard-text_sub-title p__opensans'>{subTitle}</p>
            </div>
        </div>
    )
}