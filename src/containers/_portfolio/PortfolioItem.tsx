import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IPortfolioItem } from './IPortfolioItem'
import { getItemById } from '../../data/PortfolioItems';
import 'swiper/css';
import 'swiper/css/navigation';
import "./_portfolioItem.css";

const PortfolioItem = () => {
  const { id }: any = useParams();
  const [item, setItem] = useState<IPortfolioItem>({});

  useEffect(() => {
    const item: IPortfolioItem = getItemById(id);
    setItem(item);
  }, [id]);

  return (
    <section className='portfolio--item__wrapper'>
      <div className='grid--container'>
        <header className='item__header'>
          <div className='header__info'>
            <h2>{item.title}</h2>
            <p style={{ marginTop: "30px" }}>{item.shortDescription}</p>

            <div style={{ marginTop: "30px" }}>
              <strong>
                Keywords:
              </strong>
              {item.keywords?.map((keyword, index) =>
                <span key={index} className='keyword__label'>{`${keyword};`}</span>
              )}
            </div>
          </div>
          <div className='header__image' style={{ background: `url(${item.featuredImage}) no-repeat center center, var(--pink)` }}></div>
        </header>

        <article className='item--article'>
          <h2>About the project</h2>
          <div className='article__description'>
            {item.longDescription}
          </div>
        </article>

        <div className='gallery--wrapper'>
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={2}
            navigation>
            {item.imageGallery?.map((image, index) =>
              <SwiperSlide key={index}>
                <img src={image} alt={`image_${index}`} />
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default PortfolioItem