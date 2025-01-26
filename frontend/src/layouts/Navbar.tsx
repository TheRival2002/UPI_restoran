import Logo from '@assets/images/landingPageImgs/Logo.svg';
import { useAuthContext } from '@hooks/useAuthContext.ts';
import HomeIcon from '@mui/icons-material/Home';
import ContactIcon from '@mui/icons-material/Phone';
import AboutIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import ProcessIcon from '@mui/icons-material/AssignmentTurnedIn';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DailyOfferIcon from '@mui/icons-material/Restaurant';
import { Box, Collapse, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AccountDisplay from '@sections/auth/AccountDisplay.tsx';
import { Fragment, ReactElement, useEffect, useState } from 'react';
import c from '@styles/mainLayout.module.css';
import { useLocation, useNavigate } from 'react-router';
import { paths } from '@routes/paths';
import cartIcon from './../assets/images/cart/cart-icon.svg';

// ----------------------------------------------------------

type MenuOption = {
    text: string;
    icon: ReactElement;
}

type MenuOptionParent = MenuOption & {
    id: number;
    path: string;
    targetId?: string;
    children?: MenuOptionChild[];
};

type MenuOptionChild = MenuOption & {
    targetId: string;
}

export default function Navbar() {
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);
    const [ selectedMenuOptionId, setSelectedMenuOptionId ] = useState<number | null>(null);
    const [ collapseOpen, setCollapseOpen ] = useState(false);

    const navigate = useNavigate();

    const { isAuthenticated } = useAuthContext();

    const { pathname } = useLocation();

    const menuOptions: MenuOptionParent[] = [
        {
            id: 1,
            text: 'Home',
            icon: <HomeIcon sx={{ color: 'var(--primary-orange)' }}/>,
            path: paths.home.root,
            targetId: 'home-section',
            children: [
                {
                    text: 'About',
                    icon: <AboutIcon sx={{ color: 'var(--primary-orange)' }}/>,
                    targetId: 'about-section',
                },
                {
                    text: 'How it works',
                    icon: <ProcessIcon sx={{ color: 'var(--primary-orange)' }}/>,
                    targetId: 'work-section',
                },
                {
                    text: 'Contact',
                    icon: <ContactIcon sx={{ color: 'var(--primary-orange)' }}/>,
                    targetId: 'contact-section',
                },
            ]
        },
        {
            id: 2,
            text: 'Meals',
            icon: <FastfoodIcon sx={{ color: 'var(--primary-orange)' }}/>,
            path: paths.meals.root,
        },
        {
            id: 3,
            text: 'Daily Offer',
            icon: <DailyOfferIcon sx={{ color: 'var(--primary-orange)' }}/>,
            path: paths.meals.daily,
        },
    ];

    const handleNavigate = (path: string, targetId?: string) => {
        if (path !== pathname) {
            navigate(path, { state: { targetId }});
        } else {
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }

        setOpenMenu(false);
        setSelectedMenuOptionId(null);
        setCollapseOpen(false);
    };

    const handleNavScroll = () => {
        setScrolled(window.scrollY > 70);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleNavScroll);

        return () => {
            window.removeEventListener('scroll', handleNavScroll);
        };
    }, []);

    return (
        <div className={`${c.navWrapper} ${scrolled ? c.scrolled : ''}`}>
            <div className="container">
                <nav className={c.navBar}>
                    <Box
                        className={'nav-logo'}
                        onClick={() => handleNavigate(paths.home.root)}
                        sx={{ cursor: 'pointer' }}
                    >
                        <img src={Logo} alt="logo"/>
                    </Box>

                    <div className={c.navBarMenu}>
                        <MenuIcon className={c.menuIcon} onClick={() => setOpenMenu(true)}/>
                    </div>

                    <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
                        anchor="right">
                        <Box sx={{ width: 250 }}
                            role="presentation"
                        >
                            <List component={'nav'} disablePadding>
                                {menuOptions.map((item, parentIndex) => (
                                    <Fragment key={parentIndex}>
                                        <ListItem
                                            disablePadding
                                            sx={{
                                                mb: parentIndex === (menuOptions.length - 1) ? 2 : 0,
                                            }}
                                        >
                                            <ListItemButton onClick={() => handleNavigate(item.path, item.targetId)}>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText primary={item.text}/>
                                                {
                                                    !!item.children?.length && <IconButton onClick={(e) => {
                                                        e.stopPropagation();

                                                        setSelectedMenuOptionId(item.id);
                                                        setCollapseOpen(prevOpen => !prevOpen);
                                                    }}>
                                                        {collapseOpen ? <ExpandLess/> : <ExpandMore/>}
                                                    </IconButton>
                                                }
                                            </ListItemButton>
                                        </ListItem>
                                        {
                                            !!item.children?.length && <Collapse
                                                in={collapseOpen && selectedMenuOptionId === item.id}
                                                timeout={'auto'}
                                                unmountOnExit
                                            >
                                                <List component={'div'} disablePadding>
                                                    {
                                                        item.children.map((child, childIndex) => (
                                                            <ListItemButton
                                                                key={childIndex}
                                                                onClick={() => handleNavigate(item.path, child.targetId)}
                                                                sx={{ pl: 4 }}
                                                            >
                                                                <ListItemIcon>{child.icon}</ListItemIcon>
                                                                <ListItemText primary={child.text}/>
                                                            </ListItemButton>
                                                        ))
                                                    }
                                                </List>
                                            </Collapse>
                                        }
                                    </Fragment>
                                ))}
                                {
                                    !isAuthenticated
                                        ? <div className={c.signInWrapper}>
                                            <button className={`button ${c.menuBtn}`} onClick={() => (navigate(paths.auth.login))}>Sign In</button>
                                        </div>
                                        : <AccountDisplay handleNavigate={handleNavigate}/>
                                }
                            </List>
                        </Box>
                    </Drawer>
                </nav>
                <div className={c.cart}>
                    <img src={cartIcon} alt={'cart icon'} width={44} height={44}></img>
                </div>

            </div>

        </div>
    );
}
