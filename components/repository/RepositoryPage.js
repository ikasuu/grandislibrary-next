import React from 'react';

import HeaderImage from '../HeaderImage';
import HeaderImageUrl from '../../special/SiteValues';

export function ContentPage({children}) {
    return (
        <div>
            <HeaderImage imageUrl={HeaderImageUrl.ristonia}/>
            <div className="content-container">
                {children}
            </div>
        </div>
    )
}

export function EventPage({children}) {
    return (
        <div>
            <HeaderImage imageUrl={HeaderImageUrl.fox}/>
            <div className="content-container">
                {children}
            </div>
        </div>
    )
}

export default ContentPage;
