import Logo from '@assets/images/landingPageImgs/Logo.svg';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/Phone';
import AboutIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import ProcessIcon from '@mui/icons-material/AssignmentTurnedIn';
import { Box, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Drawer } from '@mui/material';
import { useEffect, useState } from 'react';
import c from '@styles/landingPage.module.css';
import { useNavigate } from 'react-router';
import { paths } from '@routes/paths';

export default function Navbar(){
    const navigate = useNavigate();
    
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);

    const menuOptions = [
        {
            text: 'Home',            
            icon: <HomeIcon sx={{ color: 'var(--primary-orange)' }}/>,
            targetId: 'home-section'
        },
        {
            text: 'About',            
            icon: <AboutIcon sx={{ color: 'var(--primary-orange)' }}/>,
            targetId: 'about-section'
        },
        {
            text: 'How it works',            
            icon: <ProcessIcon sx={{ color: 'var(--primary-orange)' }}/>,
            targetId: 'work-section'
        },
        {
            text: 'Contact',            
            icon: <ContactIcon sx={{ color: 'var(--primary-orange)' }}/>,
            targetId: 'contact-section'
        }
    ];

    const scrollToSection = (targetId: string) =>{
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior:'smooth' });
        }
    };

    const handleNavScroll = () =>{
        setScrolled(window.scrollY > 70);     
    };

    useEffect(() => {
        window.addEventListener('scroll', handleNavScroll);
        return () => {
            window.removeEventListener('scroll', handleNavScroll); 
        };
    }, []);

    return(
        <div className={`${c.navWrapper} ${scrolled ? c.scrolled : ''}`}>
            <div className="container">
                <nav className={c.navBar}>
                    <div className={'nav-logo'}>
                        <img src={Logo} alt="logo" />
                    </div>
                    
                    <div className={c.navBarMenu}>
                        <MenuIcon className={c.menuIcon} onClick={() => setOpenMenu(true)} />
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
                                        <ListItemButton onClick={() => scrollToSection(item.targetId)}>
                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                            <ListItemText primary={item.text}/>
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                                <div className={c.signInWrapper}>
                                    <button className={c.landingPageBtn} onClick={() => (navigate(paths.auth.login))}>Sign In</button>
                                </div>  
                            </List>                                          
                        </Box>
                    </Drawer>
                </nav>
            </div>   
        </div>               
    );
}