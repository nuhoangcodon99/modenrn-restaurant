import images from '../../constants/images.js'

interface I_title {
    title: string
}

export const SubHeading: React.FC<I_title> = ({ title }) => {
    return (
        <div className='mb-4'>
            <p className="p__cormorant ">{title}</p>
            <img src={images.spoon} alt="spoon_image" className="spoon__img" />
        </div>
    )
}


