import React from 'react'
import '../../assets/css/skeleton.css'
import './Header.scss'
import { Link } from 'react-router-dom'


const Header =  () => (
    <header>
        <Link style={{textDecoration: 'none'}} to='/'>
        <img id='header-img' src='https://pmcvariety.files.wordpress.com/2013/08/t_logo_2048_black.png?w=1000&h=563&crop=1' alt='nyt-logo' />
        <div id='header-text'>
        <h1>NYT Search</h1>
        </div>
        </Link>
        <div id='nav'>
        <Link style={{textDecoration: 'none'}} to='/saved'>
        <p>View Saved Articles</p>
        </Link>
        </div>
    </header>
)


export default Header