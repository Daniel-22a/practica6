import {Box, Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material";
import {useState} from "react";


const [drawerOpen, setDrawerOpen] = useState(false);
const toggleDrawer = (open) =>(event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key  === 'Shift')) {
        return;
    }
  setDrawerOpen(open);
};

function MenuIcon() {
    return null;
}

const Sidebar = () => {
    function toggleDrawer(b) {
        return undefined;
    }

    return(
      <IconButton edge ="start" onClick = {toggleDrawer(true)}>
          <MenuIcon />
          <Drawer anchor= "left" open={drawerOpen} onClose={toggleDrawer(false)}>

          </Drawer>


          <Box className "sidebar">
              <List>
                  <ListItem button component={Link} to="/">
                      <ListItemText primary="Inicio" />
                  </ListItem>
              </List>
          </Box>

      </IconButton>


  )


};

export default Sidebar;