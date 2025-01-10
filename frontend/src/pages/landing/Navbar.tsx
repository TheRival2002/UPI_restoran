import Logo from '@assets/images/landingPageImgs/Logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/Phone';
import AboutIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Drawer } from '@mui/material';
import { useState } from 'react';
import c from '@styles/landingPage.module.css';

export default function Navbar(){
    const [ openMenu, setOpenMenu ] = useState(false);
    const menuOptions = [
        {
            text: 'Home',            
            icon: <HomeIcon sx={{ color: 'var(--primary-orange)' }}/>
        },
        {
            text: 'About',            
            icon: <AboutIcon sx={{ color: 'var(--primary-orange)' }}/>
        },
        {
            text: 'Contact',            
            icon: <ContactIcon sx={{ color: 'var(--primary-orange)' }}/>
        }
    ];
    return(
        <div className="container">
            <nav>
                <div className={'nav-logo'}>
                    <img src={Logo} alt="logo" />
                </div>
                
                <div className="navbar-menu">
                    <MenuIcon onClick={() => setOpenMenu(true)} />
                </div>
                <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
                    anchor='right'>
                    <Box sx={{ width: 250 }}
                        role = "presentation"
                        onClick = {() => setOpenMenu(false)}                   
                    >  
                        <List>
                            {menuOptions.map((item) => (
                                <ListItem key={item.text}>
                                    <ListItemButton>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text}/>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                            <div className={c.signInWrapper}>
                                <button onClick={() => (window.location.href = '/auth/login')}>Sign In</button>
                            </div>  
                        </List>                                          
                    </Box>
                </Drawer>

            </nav>
        </div>   
        
    );
}