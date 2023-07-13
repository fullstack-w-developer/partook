import React, { useState } from 'react';
import Profile from './Profile';
import Article from './Article';

const Tab = () => {
    const [tab, setTab] = useState(1);
    return (
        <div className='md:px-20 px-10'>
            <div className="flexAlign btnTabArticle">
            <button onClick={() => setTab(1)} className={tab === 1 ? "btnProf" : "btnGray"}>پروفایل</button>
            <button onClick={() => setTab(2)} className={tab === 2 ? "btnArticlesTab" : "btnGray"}>مقاله ها</button>
            </div>
            <div className={tab === 1 ? "block" : "hidden"}>
                <Profile />
            </div>
            <div className={tab === 2 ? "block" : "hidden"}>
                <Article />
            </div>
        </div>
    )
}

export default Tab