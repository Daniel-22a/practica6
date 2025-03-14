import {AppBar, Box, Button, IconButton, Toolbar, Typography} from "@mui/material";

function MenuIcon() {
    return null;
}

const Navbar = () => {
    export default function ButtonAppBar() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </AppBar>
            </Box>
        );
    }


};