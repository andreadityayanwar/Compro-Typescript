import React from 'react';

interface ContentHero {
    titleSection: string
    title: string
    children? : JSX.Element | JSX.Element[]
}

const ContentHero = ({titleSection, title, children} : ContentHero ) => {
    return (
        <div>
            <div>
                {titleSection && <h2 className='text-[#009AF0] text-base font-bold uppercase'>{titleSection}</h2>}
            </div>
            <div className='pt-4'>
                {title && <h2 className='text-5xl font-bold leading-snug'>{title}</h2>}
            </div>
            <div>{children}</div>
        </div>
    )
}

export default ContentHero