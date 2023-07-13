import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FaBars, FaBlogger } from "react-icons/fa";
import Link from "next/link";
import DropdownItem from "./DropdownItem";
import { Container, Stack } from "@mui/material";
import { useAuthContext } from "@/context/UseAuth";

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 3,
    label: "Blog",
    path: "/blog",
  },

  {
    id: 4,
    label: "About",
    path: "/about",
    // isNestedMenu: true,
    // stateLabel: "dropdown1",
    // nestedItem: [
    //   {
    //     id: 1,
    //     label: "About",
    //     path: "/about",
    //   },
    //   {
    //     id: 1,
    //     label: "About",
    //     path: "/about",
    //   },
    // ],
  },
  {
    id: 5,
    label: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    label: "Dashboard",
    path: "/dashboard",
  },
];

function Header(props) {
  const { window } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuData, setMenuData] = React.useState(null);
  const open = Boolean(anchorEl);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { isUserLogin, signIn } = useAuthContext();
  console.log("🚀 ~ file: Header.jsx:80 ~ Header ~ isUserLogin:", isUserLogin);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item?.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item?.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  //Dropdown
  const handleClick = (event, data) => {
    setMenuData(data);
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
    // setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Stack justifyContent={"space-between"}>
      <AppBar
        component="nav"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Container maxWidth={"lg"}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Link href={"/"}>
                <FaBlogger size={30} />
              </Link>
              {isUserLogin?"yes":"no"}
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <FaBars />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                  alignItems: "center",
                  gap: "10px",
                },
              }}
            >
              {navItems.map((item) => {
                return (
                  <Link href={item?.path} key={item?.id}>
                    {item?.label}
                  </Link>
                );
              })}
              <Button variant="contained">Log Out</Button>

              {/* dropdown menu  */}
              {/* <Button
              sx={{ p: 0, m: 0 }}
              variant="text"
              color={"whiteColor"}
              onClick={(e) => handleClick(e, "hiello")}
              onMouseOver={(e) => handleClick(e, "hiello")}
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              disableElevation
            >
              Dropdown
            </Button>

            <DropdownItem
              anchorEl={anchorEl}
              open={open}
              handleClose={handleClose}
              data={menuData}
            /> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Stack>
  );
}

export default Header;
