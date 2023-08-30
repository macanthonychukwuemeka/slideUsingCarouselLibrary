//the below 2 imports are slick.css libray
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
//import slider from the slick  dependence you installed
import Slider from "react-slick"
import { list } from "./data"
import { FaQuoteRight } from "react-icons/fa"

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true, but cant work when slide is 2
    //auto play options
    autoplay: true,
    autoplaySpeed: 1000,
    //  auto play interval
    // pauseOnHover: true,
    // pause on hover above autoplay car
  }
  return (
    <section className='slick-container'>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {list.map((person) => {
          const { id, image, name, title, quote } = person
          return (
            <article key={id}>
              <img src={image} alt={name} className='person-img' />
              <h5 className='name'>{name}</h5>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
      </Slider>
    </section>
  )
}

export default SlickCarousel
