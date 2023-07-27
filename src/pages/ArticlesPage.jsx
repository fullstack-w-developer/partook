import React from 'react';
import { dataArticles, btns } from '../data/Articles';
import { useState } from 'react';
import { useEffect } from 'react';

const ArticlesPage = () => {
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState(null);

  useEffect(()=>{
    setFilter(dataArticles)
  },[])

  const handleClick = (e) => {
    let btnType = e.target.value;
    setActive(btnType);
   const newFilter = dataArticles.filter(item => item.category === btnType);
   btnType === "all" ? setFilter(dataArticles) : setFilter(newFilter)
  }
  return (
    <>
      <div className='grid grid-cols-3 md:grid-cols-6 gap-5'>
        {
          btns.map((btn, id) => {
            const { name, value } = btn;
            return (
              <div key={id}>
                <button onClick={handleClick} value={value} className={`${active === value ? "bg-red-300" : ""} py-3 px-6 border-4 border-solid border-red-300 rounded-full hover:bg-red-300`}>
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
            <div key={id} className='group overflow-hidden'>
              <span>
                {title}
              </span>
              <img src={img} alt="user" className='group-hover:scale-110 transition-all duration-500 rounded-md object-cover' />
              <span>
                {user}
              </span>
              <span>
                {date}
              </span>
              <span>
                {header}
              </span>
              <span>
                {content}
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ArticlesPage