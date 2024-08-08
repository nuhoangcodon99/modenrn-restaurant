import { Menuitem } from '../../components/Menuitem/Menuitem'
import images from '../../constants/images'
import './Menu.css'
export const Menu = () => {
    return (
        <div className='app__menu bg-[var(--color-black)] flex__center section__padding' id='menu'>
            <div className='app__menu-heading'>
                <p>Menu that fits you palatte</p>
                <img src={images.spoon} alt="" />
                <h1 className='headtext__cormorant'>Today’s Special</h1>
            </div>

            <div className='app__menu-body'>
                <div className='app__menu-menuA my-8'>
                    <h1>Wine & Beer</h1>
                    <Menuitem name='Chapel Hill Shraz' price='56' ingredient='AU | Bottle' />
                    <Menuitem name='Catena Malbec' price='59' ingredient='AR | Bottle' />
                    <Menuitem name='La Vieille Rosé' price='44' ingredient='FR | 750 ml' />
                    <Menuitem name='Rhino Pale Ale' price='31' ingredient='CA | 750 ml' />
                    <Menuitem name='Irish Guinness' price='26' ingredient='IE | 750 ml' />
                </div>

                <img className='app__menu-img px-8 flex__center' src={images.menu} alt="" />

                <div className='app__menu-menuB my-8'>
                    <h1>Cocktails</h1>
                    <Menuitem name='Aperol Spritz' price='20' ingredient='Aperol | Villa Marchesi prosecco | soda | 30ml' />
                    <Menuitem name="Dark 'N' Stormy" price='16' ingredient='Dark rum | Ginger beer | Slice of lime. ' />
                    <Menuitem name='Daiquiri' price='10' ingredient='Rum | Citrus juice | Sugar' />
                    <Menuitem name='Old Fashioned' price='31' ingredient='Bourbon | Brown sugar | Angostura Bitters' />
                    <Menuitem name='Negroni' price='26' ingredient='Gin | Sweet Vermouth | Campari | Orange garnish' />
                </div>
            </div>
            <button className='app__menu-button bg-[var(--color-golden)]' type="button"><a href="#chef">View More</a></button>
        </div>
    )
}
