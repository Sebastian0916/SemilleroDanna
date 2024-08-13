import {
    AppBar,
    Drawer,
    List,
    ListItem,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
  import ConctactForm from "../Form/ContactForm";
  import { useTheme, Theme } from "@mui/material/styles";
  
  const drawerWidth = 240;
  
  const themedStyles = (theme: Theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  });
  
  const simpleStyles = {
    drawer: {
      width: drawerWidth,
      "& .MuiBackdrop-root": {
        display: "none",
      },
    },
    drawerpaper: {
      width: drawerWidth,
      backgroundColor: "rgba(120,120,120,0.2)",
    },
    content: {
      marginLeft: drawerWidth,
      padding: 3,
    },
  };
  
  export default function NavDrawer() {
    const theme = useTheme();
    return (
      <BrowserRouter>
        <div>
          <AppBar position="fixed" sx={themedStyles(theme).appBar}>
            <Toolbar>
              <Typography variant="h6" noWrap>
                Advanced Material UI Styling
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            disableEnforceFocus
            variant="temporary"
            open={true}
            sx={simpleStyles.drawer}
            PaperProps={{
              sx: simpleStyles.drawerpaper,
              elevation: 9,
            }}
          >
            <Toolbar/>
            <List>
              {[
                { text: "Input form", route: "/form" },
                { text: "Concat Card Grid", route: "/grid" },
                { text: "Contact Table", route: "/table" },
                { text: "Contact Data Grid", route: "/datagrid" },
              ].map((nav) => (
                <ListItem key={nav.text}>
                  <Link to={nav.route}>{nav.text}</Link>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <main style={simpleStyles.content}>
          <Toolbar/>
            <Routes>
              <Route path={"/"} element={<ConctactForm />} />
              <Route path={"/form"} element={<ConctactForm />} />
              <Route path={"/grid"} element={<ConctactForm />} />
              <Route path={"/table"} element={<ConctactForm />} />
              <Route path={"/datagrid"} element={<ConctactForm />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
  