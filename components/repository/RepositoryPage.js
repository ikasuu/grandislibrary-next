import React from 'react';

import HeaderImage from '../HeaderImage';
import HeaderImageUrl from '../../special/SiteValues';
import {ScrollToTop} from '../UtilityButtons';

export function ContentPage({children, altAnchor}) {
    return (
        <div>
            <HeaderImage imageUrl={HeaderImageUrl.ristonia}/>
            <ScrollToTop anchor={altAnchor}/>
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
            <ScrollToTop/>
            <div className="content-container">
                {children}
            </div>
        </div>
    )
}

export default ContentPage;
