import Image from 'next/image'
import Link from 'next/link'
import { getSliders } from '@/services/sliders'
import styles from '@/styles/layout.module.scss'

export const revalidate = 600

const Carousel: React.FC = async () => {
  const sliders = await getSliders() || []

  return (
    <div id='carouselIndicators' className='carousel slide' data-bs-ride='true'>
      <div className='carousel-indicators'>
        {sliders?.map((slider, index) => (
          <button 
            type='button' 
            data-bs-target='#carouselIndicators' 
            data-bs-slide-to={index} 
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={slider?.name || ''}
          ></button>
        ))}
      </div>
      <div className='carousel-inner'>
        {sliders?.map((slider, index) => (
          <div className={'carousel-item' + (index === 0 ? ' active' : '')}>
            <Link href={slider?.url || '#'}>
              <div className={styles.sliderImageContainer}>
                <Image
                  fill
                  src={slider?.image}
                  alt={slider?.caption || ''}
                />
              </div>
            </Link>
            {slider?.caption && (
              <div className={`carousel-caption d-none d-md-block ${styles.sliderCaption}`}>
                <h5>{slider?.caption}</h5>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='#carouselIndicators' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carouselIndicators' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}

export default Carousel
