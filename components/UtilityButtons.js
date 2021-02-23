import React, { useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import styled from 'styled-components';

/*
    Info Button which when hovered shows a tooltip
    Created by: Ikasuu, Fall 2020
*/

function InfoButton({tooltip}) {
    return (
        <OverlayTrigger placement="top" overlay={
            <Tooltip style={{zIndex: '1'}}>
                {tooltip}
            </Tooltip>
        }>
            <Button variant="link"><span className="info-button"/></Button>
        </OverlayTrigger>
    );
}

/*
    Fab button that pops up quick jump menu in class overviews
    Created by: Ikasuu, Spring 2021
*/

// Styling for each link
const MenuLink = styled(Link)`
    color: black !important;
    width: 100%;

    &:focus{
        outline: none;
    }
`;

const MenuHeader = styled.h6`
    text-align: center;
    margin-top: 0.25rem;
`;

export function QuickJump({settings, setSettings}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event) => {
        setSettings({ ...settings, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Fab onClick={handleMenu} color="primary" size="medium" style={{position: 'fixed', bottom: '2.5rem', right: '2.5rem', zIndex: '1000'}}>
                <span className="jump-button"/>
            </Fab>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 190,
                    horizontal: 200,
                }}
                open={open}
                onClose={handleClose}
                disableScrollLock
            >
                <div className="arrow" style={{position: "absolute", top: "0px", transform: "translate(0px, 8px)"}}/>
                <MenuHeader>Quick Jump</MenuHeader>
                <MenuItem onClick={handleClose}><MenuLink smooth to="#property" scroll={el => scrollWidthOffset(el)}>Class Properties</MenuLink></MenuItem>
                <MenuItem onClick={handleClose}><MenuLink smooth to="#stat" scroll={el => scrollWidthOffset(el)}>Base Stats</MenuLink></MenuItem>
                <MenuItem onClick={handleClose}><MenuLink smooth to="#skill" scroll={el => scrollWidthOffset(el)}>Skill Info</MenuLink></MenuItem>
                <Divider variant="middle" />
                <MenuHeader>Settings</MenuHeader>
                <FormGroup>
                    {/* <FormControlLabel
                        control={<Switch color="primary" checked={settings.offline} onChange={handleChange} name="offline"/>}
                        label="Offline Skill Info"
                    /> */}
                    <FormControlLabel
                        control={<Switch color="primary" checked={settings.animations} onChange={handleChange} name="animations"/>}
                        label="Skill Animations"
                    />
                </FormGroup>
            </Menu>
        </div>
    )
}

//Used to scroll to anchor tags
const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

/*
    Repsonsible for creating Fab button to jump back up to top on Content and Event pages
    Created by: Ikasuu, Spring 2021
*/

export function ScrollToTop() {
    return (
        <Link smooth to="#" scroll={el => scrollWidthOffset(el)}><ScrollFab/></Link>
    );
}

// Function to trigger fab to appear when scrolling
function ScrollTop(props){
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return(
        <Zoom in={trigger}>
            {children}
        </Zoom>
    );
}

// Function for quick jump menu, handles logic
function ScrollFab(){
    return(
        <ScrollTop>
                <Fab color="primary" size="medium" style={{position: 'fixed', bottom: '2.5rem', right: '2.5rem', zIndex: '1000'}}>
                    <span className="scroll-top-button"/>
                </Fab>
        </ScrollTop>
    );
}

export default InfoButton;
