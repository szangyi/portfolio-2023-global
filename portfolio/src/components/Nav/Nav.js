import "./Nav.css"

import { Drawer, Toolbar, List, Typography, Divider, ListItem, ListItemButton, ListItemText } from '@mui/material/';


const drawerWidth = 180;

const pages = [
    {
        'name': 'About',
        'href': '/about',
    },
    {
        'name': 'My Skills',
        'href': '/skills',
    },
]


const Banner = (props) => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    borderWidth: 0,
                    bgcolor: 'transparent'
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            {/* <Divider /> */}
            <List>
                {pages.map(page => (
                    <ListItem key={page.name} disablePadding sx={{ '& .MuiDrawer-paper': { borderWidth: 0 } }}>
                        <ListItemButton>
                            <ListItemText primary={page.name} href={page.href} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            {/* <Divider /> */}
        </Drawer>

    )
}

export default Banner;
