import { createGlobalStyle } from 'styled-components';
import style from 'styled-theming';
import storage from 'local-storage-fallback';

/*
    File used to provide global styling to site, used mainly to provide support for dark mode
    Created by: Ikasuu, Fall 2020
*/

//Used for dark mode functionality, gets the correct string based on light or dark mode
const getBackground = style('mode', {
    light: '#EEE',
    dark: '#2a2829'
  });
  
const getForeground = style('mode', {
    light: '#2a2829',
    dark: '#EEE'
  });
  
const getMenuColor = style('mode',{
    light: 'black',
    dark: 'white'
  });

  const getMenuSubColor = style('mode',{
    light: 'white',
    dark: 'black'
  });
  
//Global style that is applied to all pages of site
//Any changes caused by dark mode should go below
export const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${getBackground};
    color: ${getForeground};
    // transition: all 0.5s ease-out;
  }

  tr, th{
    color: ${getForeground} !important;
  }

  hr{
    border-top: ${props => props.theme.mode === 'dark' ? '1px solid rgb(255, 255, 255,0.5)' : '1px solid rgba(0,0,0,0.5);'};
  }

  .site-title{
    color: ${getForeground} !important;
  }

  .footer-link{
    color: ${getForeground} !important;
    font-size: 1rem;
  }

  //Toggle button for dark mode
  .toggle-mode{
    background: url("/icons/nights_stay-${getMenuColor}-18dp.svg");
    background-size: 1.5rem 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    display:block;
  }

  //Navbar discord button
  .discord-button{
    background: url("/icons/discord-logo-${getMenuColor}.svg");
    margin-top: -0.2rem;
    margin-left: -0.2rem;
    background-size: 6rem 2rem;
    width: 5.7rem;
    height: 1.7rem;
    display:block;
  }

  //Footer discord button
  .discord-mini-button{
    background: url("/icons/discord-mini-logo-${getMenuColor}.svg");
    background-size: 2.3rem 2.3rem;
    width: 2.3rem;
    height: 2.3rem;
    display:block;
  }

  //Footer twitter button
  .twitter-button{
    background: url("/icons/twitter-rounded-square-${getMenuColor}.png");
    background-size: 1.7rem 1.7rem;
    width: 1.7rem;
    height: 1.7rem;
    display:block;
  }

  //Footer youtube button
  .youtube-button{
    background: url("/icons/yt_logo_mono_${getMenuColor}.png");
    background-size: 2rem 1.7rem;
    width: 2rem;
    height: 1.7rem;
    margin-left: 0.25rem;
    display:block;
  }

  //Anchor jump button, found in content and event pages
  .scroll-top-button{
    background: url("/icons/expand_less-${getMenuSubColor}-18dp.svg");
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    display: block;
  }

  //Fab button, found in class overviews to expand options
  .jump-button{
    background: url("/icons/more_horiz-${getMenuSubColor}-18dp.svg");
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    display: block;
  }

  //Anchor jump button, found in class overviews, this one is for within the tabs
  .jump-button-tabs{
    background: url("/icons/arrow_circle_up-${getMenuColor}-18dp.svg");
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    display: inline-block;
  }
  
  //Navbar links such as 'Home' and 'About'
  .nav-link-button{
    color: ${getForeground} !important;
  }

  .navbar{
    background-color: ${getBackground};
  }
  
  //Hamburger icon
  .navbar-toggler-icon{
    background-image: url("/icons/menu-${getMenuColor}-18dp.svg") !important;
    background-size: 2.5rem 2.5rem;
    margin-top: 0.6rem;
  }

  //For the dropdown button in the navbar
  .dropdown-toggle{
    color: ${getForeground} !important;
  }

  //The dropdown menu itself, not the button
  .dropdown-menu{
    background-color: ${getBackground};
  }

  //The i button styling in InfoButton.js
  .info-button{
    background: url("/icons/info-${getMenuColor}-18dp.svg");
    background-size: 1.3rem 1.3rem;
    height: 1.3rem;
    width: 1.3rem;
    display: block;
  }

  //Resources page
  .faq-search{
    background-color: ${props => props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} !important;
    color: ${getForeground};
  }

//Bootstrap components
  .card{
    background-color: ${props => props.theme.mode === 'dark' ? '#37363a' : '#FFF'};
  }

  //Cards related
  .text-muted{
    color: ${props => props.theme.mode === 'dark' ? '#a2afba !important' : '#6c757d !important'};
  }

  //Tabs related
  .nav-tabs{
    border-color: ${props => props.theme.mode === 'dark' ? '#242020 !important' : ''};
  }

  //Tabs related
  .nav-link{
    border: none !important;
  }

  //Tabs related
  .nav-link.active{
    color: ${props => props.theme.mode === 'dark' ? '#FFF' : '#37363a'} !important;
    background-color: ${props => props.theme.mode === 'dark' ? '#37363a' : '#FFF'} !important;
    border-color: ${props => props.theme.mode === 'dark' ? '#242020 !important' : ''};
    box-shadow: 0 0.1rem 0.1rem 0 rgba(0,0,0,0.2),0 0.2rem 0.2rem 0 rgba(0,0,0,0.19) !important;
  }

  //Modals related
  .modal-content{
    background-color: ${getBackground} !important;
  }

  //Modals related
  .modal-header{
    border-color: ${props => props.theme.mode === 'dark' ? '#37363a !important' : ''} ;
  }

  //Modals related
  .close{
    color: ${getForeground} !important;
    opacity: 1 !important;
  }

  //Swiper related
  .swiper-scrollbar{
    background: ${props => props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} !important;
  }

  .swiper-scrollbar-drag{
    background: ${props => props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'} !important;
  }

  .swiper-pagination-bullet{
    background: ${props => props.theme.mode === 'dark' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'} !important;
  }
  
  .swiper-button-prev, .swiper-button-next{
    color: white !important;
    -webkit-filter: drop-shadow( 3px 3px 1px rgba(0, 0, 0, .8));
    filter: drop-shadow( 3px 3px 1px rgba(0, 0, 0, .8));
    padding-bottom: 2.5rem;
  }
  
  //Material UI related
  .MuiPaper-root{
    border-radius: 0 !important;
  }
  
  .MuiListItem-root{
    font-family: poppins, sans-serif !important;
    font-weight: 300 !important;
    font-size: 1.1rem !important;
  }

  /* For Material UI fab primary color */
  .MuiFab-primary{
    background-color: ${getMenuColor} !important;
  }

  `;
  
//Get user's preferred site theme, if none, default is 'dark'
export  function getInitialTheme(){
    const savedTheme = storage.getItem('theme');
    return savedTheme ?  JSON.parse(savedTheme) : {mode: 'dark'};
  }