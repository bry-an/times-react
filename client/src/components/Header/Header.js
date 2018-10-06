import React from 'react'
import '../../assets/css/skeleton.css'
import './Header.scss'


const Header =  () => (
    <header>
        <img id='header-img' src='https://pmcvariety.files.wordpress.com/2013/08/t_logo_2048_black.png?w=1000&h=563&crop=1' alt='nyt-logo' />
        <div id='header-text'>
        <h1>NYT Search</h1>
        </div>
    </header>
)


export default Header