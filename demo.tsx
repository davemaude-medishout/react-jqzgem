import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const drawerWidth = 250;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const useMediaQuery = (
  query: string,
  defaultState: boolean = false
): boolean => {
  const [state, setState] = React.useState<boolean>(defaultState);

  React.useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    const onChange = () => {
      if (!mounted) return;
      setState(!!mql.matches);
    };

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
};

const usePrevious = (value) => {
  const ref = React.useRef(null);
  React.useEffect(() => void (ref.current = value), [value]);
  return ref.current;
};

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const isBigScreen = useMediaQuery('(min-width: 1140px)', false);
  const prevBigScreen = usePrevious(isBigScreen);
  React.useEffect(() => {
    if (isBigScreen !== prevBigScreen && isBigScreen !== open) {
      setOpen((prev) => !prev);
    }
  }, [isBigScreen, prevBigScreen, open]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ background: 'white', shadows: 0 }}
        open={open}
      >
        <Toolbar>
          <IconButton
            color="#1D2220"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              height: 40,
              marginRight: 5,
              marginLeft: -1.5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              pt: 0.75,
              ...(open && { display: 'none' }),
            }}
          >
            <img
              src="https://app.medishout.co.uk/d4982b2b2f87017d8dc7709e48c8716a.svg"
              height="22"
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        PaperProps={{ sx: { backgroundColor: '#1D2220', border: 'none' } }}
        open={open}
      >
        <DrawerHeader style={{ backgroundColor: 'white' }}>
          <img
            src="https://app.medishout.co.uk/d4982b2b2f87017d8dc7709e48c8716a.svg"
            height="22"
          />
          <IconButton onClick={handleDrawerClose} style={{ color: '#B1B0B0' }}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Shout feed', 'Send shout', 'History'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  height: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  style={{ color: '#B1B0B0' }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    letterSpacing: 0,
                  }}
                  style={{ color: '#B1B0B0' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Inbox', 'Notification settings', 'Users list'].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 40,
                    height: 40,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    style={{ color: '#B1B0B0' }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 'normal',
                      letterSpacing: 0,
                    }}
                    style={{ color: '#B1B0B0' }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Shout reports', 'Collection reports', 'SharpSmart reports'].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 40,
                    height: 40,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    style={{ color: '#B1B0B0' }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 'normal',
                      letterSpacing: 0,
                    }}
                    style={{ color: '#B1B0B0' }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Faulty scopes', 'Collections'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  height: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  style={{ color: '#B1B0B0' }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    letterSpacing: 0,
                  }}
                  style={{ color: '#B1B0B0' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Sharpsmart dashboard', 'Bin stock', 'Bin stock history'].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 40,
                    height: 40,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                    style={{ color: '#B1B0B0' }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                    primaryTypographyProps={{
                      fontSize: 14,
                      fontWeight: 'normal',
                      letterSpacing: 0,
                    }}
                    style={{ color: '#B1B0B0' }}
                  />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Bulk Update'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 40,
                  height: 40,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  style={{ color: '#B1B0B0' }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    letterSpacing: 0,
                  }}
                  style={{ color: '#B1B0B0' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, pt: 1.5 }}>
        <DrawerHeader />
        <Box sx={{ mb: 1, px: 3 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              color="text.primary"
            >
              Breadcrumb
            </Typography>
          </Breadcrumbs>
        </Box>
        <Divider />
        <Box sx={{ mt: 3, px: 3 }}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
