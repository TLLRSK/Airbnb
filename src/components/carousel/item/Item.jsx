
import './Item.scss';
export default function Item() {
    return <>
        <a className="item" href="">
            <img className='item-img' src="http://placekitten.com/g/240" alt="" />
            <div className="item-data">
                <div className="item-data--top">
                    <div className='item-data--left'>
                        <div className="item-superhost">
                            <p>SUPERHOT</p>
                        </div>
                        <div className="item-title">
                            <p>title</p>
                        </div>
                    </div>
                    <div className='item-data--right'>
                        <div className="item-rating">
                            <img src="http://placekitten.com/g/24/24" alt="" className="rating-star" />
                            <p className="rating-number">10.00</p>
                        </div>
                    </div> 
                </div>

                <div className="item-data--bottom">
                    <p className="item-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </a>
    </>
}