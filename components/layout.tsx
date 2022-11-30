import {
  AppBar,
  createM3Palette,
  Fab,
  NavigationRailItem,
  unstable_createMaterialDesign3Theme,
  IconButton,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@dotdirewolf/mui-m3-theme";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Typography,
  Link,
  Box,
  useMediaQuery,
  Toolbar,
  responsiveFontSizes,
  List,
} from "@mui/material";
import { NavigationRail } from "@dotdirewolf/mui-m3-theme";
import React, { useMemo, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BookIcon from "@mui/icons-material/Book";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import Head from "next/head";

const navItem = [
  {
    id: "",
    label: "首页",
    icon: <HomeOutlinedIcon />,
    selectedIcon: <HomeIcon />,
  },
  {
    id: "blog",
    label: "Blog",
    icon: <BookOutlinedIcon />,
    selectedIcon: <BookIcon />,
  },
];

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const m3Palette = createM3Palette({ r: 254, g: 80, b: 0, a: 1 });
  const theme = React.useMemo(
    () =>
      responsiveFontSizes(
        unstable_createMaterialDesign3Theme(
          m3Palette,
          prefersDarkMode ? "dark" : "light"
        )
      ),
    [m3Palette, prefersDarkMode]
  );
  const router = useRouter();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const currentPart = useMemo(() => {
    return router.pathname.split("/")[1];
  }, [router.pathname]);

  return (
    <div>
      <Head>
        <title>.direwolf</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* 导航栏 */}
        {mobile ? (
          <>
            <AppBar>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  sx={{ mr: 2 }}
                  onClick={() => setDrawerOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                  drwf.ink
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  sx={{ mr: 2 }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <MenuOpenIcon />
                </IconButton>
              </Toolbar>
              <List>
                {navItem.map((item) => (
                  <ListItem
                    key={item.id}
                    onClick={() => {
                      router.push(`/${item.id}`);
                      setDrawerOpen(false);
                    }}
                    active={currentPart === item.id}
                  >
                    <ListItemIcon>
                      {currentPart === item.id ? item.selectedIcon : item.icon}
                    </ListItemIcon>
                    <ListItemText>{item.label}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <NavigationRail>
            <div style={{ height: "80px" }} />
            <Fab
              variant="lowered"
              color="secondary"
              style={{
                marginBottom: "28px",
              }}
              href="https://github.com/feightwywx/drwf.ink"
            >
              <FontAwesomeIcon icon={brands("github")} size="xl" />
            </Fab>
            {navItem.map((item) => (
              <NavigationRailItem
              key={item.id}
              icon={currentPart === item.id ? item.selectedIcon : item.icon}
              label={item.label}
              onClick={() => {
                router.push(`/${item.id}`);
              }}
              selected={currentPart === item.id}
            />
            ))}
          </NavigationRail>
        )}

        <Box
          sx={{
            mt: { xs: "60px", sm: "64px", md: 0 },
            ml: mobile ? 0 : "80px",
            padding: mobile ? "4px" : "8px",
          }}
        >
          {children}
          {/* footer */}
          <Container
            style={{
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Box
              sx={{
                color: theme.palette.surface.onVariant,
                mt: { xs: theme.spacing(4), md: theme.spacing(8) },
                mb: { xs: theme.spacing(4), md: theme.spacing(8) },
              }}
            >
              <Typography>Copyright © .direwolf 2022. </Typography>

              <Typography>
                Title Photo by{" "}
                <Link href="https://unsplash.com/@nvte?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Nathan Duck
                </Link>{" "}
                on{" "}
                <Link href="https://unsplash.com/s/photos/abstract-orange?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </Link>
                .
              </Typography>
              <Link href="https://beian.miit.gov.cn">皖ICP备20002195号-3</Link>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
}
