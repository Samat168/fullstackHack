import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, useSearchParams } from "react-router-dom";
import Logo from "../../assets/SellSwap-removebg-preview.png";
import SearchIcon from "@mui/icons-material/Search";
import { Input } from "@mui/material";
import { Opacity, Search } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContextProvider";
import { useState } from "react";
import { useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = [
  { name: "Главная", link: "/", id: 1 },
  { name: "Продукты", link: "/products", id: 2 },
  { name: "Admin", link: "/admin", id: 3 },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { currentUser, logout, checkAuth } = useAuth();

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);

      if (isScrollingUp && navbarHidden) {
        setNavbarHidden(false);
      } else if (!isScrollingUp && !navbarHidden) {
        setNavbarHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, navbarHidden]);
  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  React.useEffect(() => {
    if (localStorage.getItem("tokens")) {
      checkAuth();
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      className="navbar"
      sx={{
        width: "100%",
        margin: "auto",
        boxShadow: "none",
        position: "static",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            style={{ width: "100px", height: "80px", margin: "5px 0" }}
            src={Logo}
            alt=""
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link key={page.id} to={page.link}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flexStart",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link key={page.id} to={page.link}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    margin: "0 20px",
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <div
            className="search_container"
            style={{
              display: "flex",
              alignItems: "center",
              width: "25%",

              padding: "5px 15px",
              borderRadius: "20px",
            }}
          >
            <SearchIcon
              sx={{
                width: "25px",
                height: "25px",
                marginTop: "8px",
                color: "#2b67f5",
              }}
            />
            <div style={{ width: "90%" }}>
              <input
                className="search_input"
                type="text"
                placeholder="search"
                style={{
                  width: "70%",

                  color: "white",
                  border: "none",
                }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <Box sx={{ flexGrow: 0, display: "flex" }}>
            {currentUser ? (
              <div>
                <p>{currentUser}</p>
                <FavoriteBorderIcon className="navbar_icons" />
                <ShoppingCartIcon className="navbar_icons" />
              </div>
            ) : (
              <Box>
                <Link to="/login">
                  <Button sx={{ color: "#ebedff" }}>Sign in</Button>
                </Link>
                <Link to="/register">
                  <Button sx={{ color: "#ebedff" }}>Sign up</Button>
                </Link>
              </Box>
            )}
            {/*  
            <Tooltip title="Open settings"> 
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> 
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> 
              </IconButton> 
            </Tooltip> 
            <Menu 
              sx={{ mt: "45px" }} 
              id="menu-appbar" 
              anchorEl={anchorElUser} 
              anchorOrigin={{ 
                vertical: "top", 
                horizontal: "right", 
              }} 
              keepMounted 
              transformOrigin={{ 
                vertical: "top", 
                horizontal: "right", 
              }} 
              open={Boolean(anchorElUser)} 
              onClose={handleCloseUserMenu} 
            > 
                {settings.map((setting) => ( 
                  <MenuItem key={setting} onClick={handleCloseUserMenu}> 
                    <Typography textAlign="center">{setting}</Typography> 
                  </MenuItem> 
                ))} 
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
