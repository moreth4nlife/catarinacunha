import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../../data/PortfolioItems';
import { IPortfolioItem } from './IPortfolioItem';
import { HiArrowSmUp } from "react-icons/hi";
import './_portfolio.css';

const portfolioItems: IPortfolioItem[] = data;

const Portfolio = () => {
  return (
    <section className='portfolio-wrapper' id="portfolio">

      <div className='section-title'>
        <h2>My portfolio</h2>
      </div>

      <ul className='item--grid'>
        {portfolioItems.map((item, i) => {
          return (
            <div className='item'>
              <li key={i}>
                <h3>{item.title}</h3>
                <p>{item.shortDescription}</p>

                <div style={{ margin: "30px 0" }}>
                  <strong>
                    Keywords:
                  </strong>
                  {item.keywords?.map((keyword, index) =>
                    <span key={index} className='keyword__label'>{`${keyword};`}</span>
                  )}
                </div>

                <div className='item--footer'>
                  {item.date}
                  <Link to={item.externalLink}>View project <span className='item__icon'><HiArrowSmUp /></span></Link>
                </div>
              </li>
            </div>
          )
        })}
      </ul>

    </section>
  )
}

export default Portfolio;