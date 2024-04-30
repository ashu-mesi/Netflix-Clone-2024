import React from 'react'
import "./header.css";
import NetflixLogo from '../../assets/images/netflix.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Header = () => {
  return (
    <div className='header-outer-container'>
        <div className='header-container'>
        <div className='header-left'>
            <ul>
                <img src ={NetflixLogo} alt="netflix" width="100" />
                <li>Home</li>
                <li>TV Show</li>
                <li>Movies</li>
                <li>Latests</li>
                <li>MyLists</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className='header-right'>
            <ul>
                <li><SearchIcon /></li>
                <li><NotificationsNoneIcon /></li>
                <li><AccountBoxIcon /></li>
                <li><ArrowDropDownCircleIcon /></li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Header
