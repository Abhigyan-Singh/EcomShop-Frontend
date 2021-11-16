import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CarouselProvider, Dot, Slider, Slide } from 'pure-react-carousel';
import './hero.css';
import { COBORNSStyle, CASHWISEStyle, MARKETPLACEFOODSWIStyle } from './styles';

const Hero = (props) => {
  const { className, brandName, slides, ...rest } = props;
  const componentClassName = classNames('cbn-hero', {}, className);
  const getStyle = (name) => {
    switch (brandName) {
      case 'COBORNS':
        return COBORNSStyle[name];
      case 'CASHWISE':
        return CASHWISEStyle[name];
      case 'MARKETPLACEFOODSWI':
        return MARKETPLACEFOODSWIStyle[name];
      default:
        break;
    } 
  }

  return (
    <div className={componentClassName} {...rest}>
      <CarouselProvider
        infinite={true}
        isIntrinsicHeight={true}
        totalSlides={slides.length}
      >
        <Slider className="h-72 md:h-96">
          {slides.map((slide, index) => (
            <Slide className="relative h-72 md:h-96" index={index} key={index}>
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={slide.imageSrc}
                alt=""
              />
              <div className="relative p-7 md:p-10">
                <h1 className="text-2xl font-serif mb-3 tracking-tight md:text-4xl" style={getStyle('textColor')}>
                  {slide.title}
                </h1>
                <p className="text-lg">
                  <a className="underline text-white" href={slide.href}>
                    {slide.link}
                  </a>
                </p>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((slide, index) => (
            <Dot className="cbn-hero__dot" key={index} slide={index}>
              <span className="sr-only">Slide {index + 1}</span>
            </Dot>
          ))}
        </div>
      </CarouselProvider>
    </div>
  );
};

Hero.propTypes = {
  slides: PropTypes.array
};

Hero.defaultProps = {
  slides: []
};

export default Hero;
