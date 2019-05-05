import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby' 
import styledHeader from './header.module.scss'


const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata{
                    title
                }
            }
        } 
    `)

    return (
        <header className={styledHeader.header}>
            <h1>
                <Link className={styledHeader.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav>
                <ul className={styledHeader.navList } >
                    <li><Link activeClassName={styledHeader.activeNavItem} className={styledHeader.navItem} to="/">Home</Link></li>
                    <li><Link activeClassName={styledHeader.activeNavItem} className={styledHeader.navItem} to="/blog">Blog</Link></li>
                    <li><Link activeClassName={styledHeader.activeNavItem} className={styledHeader.navItem} to="/about">About</Link></li>
                    <li><Link activeClassName={styledHeader.activeNavItem} className={styledHeader.navItem} to="/contact">Contact</Link></li>
                </ul>
            </nav>      
        </header>
    )
}

export default Header