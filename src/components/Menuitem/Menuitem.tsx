import './Menuitem.css'

interface I_Menuitem {
    name: string;
    price: string;
    ingredient: string;
}

export const Menuitem: React.FC<I_Menuitem> = ({ name, price, ingredient }) => {
    return (
        <div className=" mb-10">
            <div className='flex app__menu-item'>
                <p className="app__menu-item_name mb-2 w-48">{name}</p>
                <div className="app__menu-item-gap-decor" />
                <p className='app__menu-item_price'>${price}</p>
            </div>
            <p className='app__menu-item_ingredient'>{ingredient}</p>
        </div>
    )
}