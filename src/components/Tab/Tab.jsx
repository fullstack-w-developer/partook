import React, { useState } from 'react';
import Profile from './Profile';
import Articles from './Articles';

const Tab = () => {
    const [tab, setTab] = useState(1);
    return (
        <div>
            <button onClick={() => setTab(1)} className={tab === 1 ? "btnProf" : "btnGray"}>پروفایل</button>
            <button onClick={() => setTab(2)} className={tab === 2 ? "btnArticle" : "btnGray"}>مقاله ها</button>
            {/* profile */}
            <div className={tab === 1 ? "block" : "hidden"}>
                <Profile />
            </div>
            {/* profile */}
            {/* novel */}
            <div className={tab === 2 ? "block" : "hidden"}>
                <Articles />
            </div>
            {/* novel */}
        </div>
    )
}

export default Tab