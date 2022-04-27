import timeIcon from '../res/icons/timeIcon.svg'
import placeholder from '../res/placeholder.jpg'


const PromoBox = (props) => {
  return (
	<a href="/" className="promo-box">
    	<figure>
    	  <img src={ placeholder } alt="#" className="thumb" />
    	</figure>
    	<strong className="name">{ props.title }</strong>
    	<div className="meta">
    	  <div className="time">
    	    <img src={ timeIcon } alt="" />
    	    <span>20 min</span>
    	  </div>
    	  <div className="category">
    	    <span>Předkrmy</span>
    	  </div>
    	</div>
    </a>
  )
}

export default PromoBox