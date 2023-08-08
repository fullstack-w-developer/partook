import React, { useState, useEffect } from 'react';
import { dataArticles, btns } from '../data/Articles';
import "../styles/Filter.css"

const ArticlesPage = () => {
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    setFilter(dataArticles)
  }, [])

  const handleClick = (e) => {
    let btnType = e.target.value;
    setActive(btnType);
    const newFilter = dataArticles.filter(item => item.category === btnType);
    btnType === "همه مقالات" ? setFilter(dataArticles) : setFilter(newFilter)
  }
  return (
    <div className='md:px-20 px-10'>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-5 my-10'>
        {
          btns.map((btn, id) => {
            const { name, value } = btn;
            return (
              <div key={id}>
                <button onClick={handleClick} value={value} className={`${active === value ? "colorBtn" : ""} btnFilter`}>
                  {name}
                </button>
              </div>
            )
          })
        }
      </div>
      <div className='grid md:grid-cols-3 gap-5'>
        {filter &&
          filter.map((data, id) => {
            const { title, img, user, date, header, content } = data;
            return (
              <div key={id} className='group overflow-hidden flexCol'>
                <div className="flexAlign headFilter">
                  <div className="flexAlign imgFilter">
                    <img src={img} alt="user" className='group-hover:scale-110 transition-all duration-500' />
                    <span className='colorFill'>
                      {user}
                    </span>
                  </div>
                  <div>
                    <span className='colorFill'>
                      {date}
                    </span>
                  </div>
                </div>
                <span className='headerFilter'>
                  {header}
                </span>
                <span className='contentFilter'>
                  {content}
                </span>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ArticlesPage