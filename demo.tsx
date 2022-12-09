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
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HistoryIcon from '@mui/icons-material/History';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 250;

const MediIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6145 13.7176C19.383 13.6588 19.0852 13.5412 18.9529 13.4235L15.7108 6L12.193 14.0471H11.796L8.2782 6.01176L5.06917 13.3765C5.00301 13.4824 4.67218 13.6353 4.37444 13.7176L1 14.4824L1.1213 15.6471H6.10576L8.0797 11.1529H8.47669L11.4762 18H12.5128L15.5123 11.1529H15.9093L17.817 15.4941L17.8832 15.6471H22.8787L23 14.4824L19.6256 13.7294L19.6145 13.7176Z"
        fill="currentColor"
      />
    </svg>
  );
};

const BulkUpdateIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.48298 16.4511C3.46037 12.9541 5.46623 9.29029 8.9632 8.26768C11.7095 7.46459 14.5586 8.52928 16.1507 10.7171C15.6136 10.8621 14.7863 11.085 13.5148 11.4273C13.1398 11.5277 12.8598 11.8407 12.8023 12.2248C12.7447 12.6088 12.9199 12.9903 13.2483 13.197L18.5122 16.5017C18.9932 16.804 19.6291 16.6336 19.8945 16.1314L22.8009 10.6374C22.982 10.2945 22.9429 9.87646 22.7011 9.57245C22.459 9.2686 22.06 9.13757 21.6853 9.23798C20.6276 9.52013 19.8135 9.7372 19.1872 9.90411C17.0517 6.08836 12.4966 4.10876 8.12118 5.38827C3.03396 6.87591 0.115921 12.2059 1.60357 17.2931C1.83608 18.0883 2.66916 18.5443 3.46428 18.3118C4.25941 18.0793 4.7155 17.2462 4.48298 16.4511Z"
        fill="currentColor"
      />
    </svg>
  );
};

const FaultyScopeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6667 5.8126C17.8258 5.8126 16.3333 7.35173 16.3333 9.25008C16.3333 10.6612 17.1587 11.8703 18.3379 12.4001V15.7817C18.3379 18.2417 16.2442 20.2504 13.6712 20.2504C11.1712 20.2504 9.11708 18.3555 9.00875 15.9867C12.0042 15.343 14.3333 12.5715 14.3333 9.21141V2.57235C14.3333 2.08337 13.9938 1.65368 13.53 1.56259L10.9083 1.02065C10.3667 0.907857 9.84417 1.26841 9.735 1.82717L9.6 2.5036C9.49062 3.06219 9.84217 3.60316 10.3837 3.71617L11.6625 3.97652V9.19422C11.6625 11.4664 9.90708 13.3463 7.69875 13.3678C5.47458 13.3892 3.665 11.539 3.665 9.24579L3.66208 3.98086L4.94208 3.71823C5.48375 3.61081 5.83417 3.06726 5.72458 2.50867L5.59583 1.83243C5.49167 1.27384 4.96458 0.912476 4.42292 1.02548L1.80333 1.55829C1.33958 1.65497 1 2.07821 1 2.57235V9.24965C1 12.569 3.29625 15.3512 6.3375 15.9871C6.44583 19.8762 9.69167 23 13.6667 23C17.7083 23 21 19.7615 21 15.7813V12.3997C22.1763 11.8686 23 10.6612 23 9.25223C23 7.35088 21.5083 5.8126 19.6667 5.8126ZM19.6667 10.2813C19.1146 10.2813 18.6667 9.81941 18.6667 9.25008C18.6667 8.68075 19.1125 8.21884 19.6667 8.21884C20.2208 8.21884 20.6667 8.6786 20.6667 9.25008C20.6667 9.82156 20.2208 10.2813 19.6667 10.2813Z"
        fill="currentColor"
      />
    </svg>
  );
};

const ReportsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 384 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M384 128h-128V0L384 128zM256 160H384v304c0 26.51-21.49 48-48 48h-288C21.49 512 0 490.5 0 464v-416C0 21.49 21.49 0 48 0H224l.0039 128C224 145.7 238.3 160 256 160zM255 295L216 334.1V232c0-13.25-10.75-24-24-24S168 218.8 168 232v102.1L128.1 295C124.3 290.3 118.2 288 112 288S99.72 290.3 95.03 295c-9.375 9.375-9.375 24.56 0 33.94l80 80c9.375 9.375 24.56 9.375 33.94 0l80-80c9.375-9.375 9.375-24.56 0-33.94S264.4 285.7 255 295z"
      ></path>
    </svg>
  );
};

const CollectionReportsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 384 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM96 32h64v32H96V32zM96 96h64v32H96V96zM96 160h64v32H96V160zM128.3 415.1c-40.56 0-70.76-36.45-62.83-75.45L96 224h64l30.94 116.9C198.7 379.7 168.5 415.1 128.3 415.1zM144 336h-32C103.2 336 96 343.2 96 352s7.164 16 16 16h32C152.8 368 160 360.8 160 352S152.8 336 144 336z"
      ></path>
    </svg>
  );
};

const SharpSmartReportsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 384 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M256 0v128h128L256 0zM224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM64 72C64 67.63 67.63 64 72 64h80C156.4 64 160 67.63 160 72v16C160 92.38 156.4 96 152 96h-80C67.63 96 64 92.38 64 88V72zM64 136C64 131.6 67.63 128 72 128h80C156.4 128 160 131.6 160 136v16C160 156.4 156.4 160 152 160h-80C67.63 160 64 156.4 64 152V136zM304 384c8.875 0 16 7.125 16 16S312.9 416 304 416h-47.25c-16.38 0-31.25-9.125-38.63-23.88c-2.875-5.875-8-6.5-10.12-6.5s-7.25 .625-10 6.125l-7.75 15.38C187.6 412.6 181.1 416 176 416H174.9c-6.5-.5-12-4.75-14-11L144 354.6L133.4 386.5C127.5 404.1 111 416 92.38 416H80C71.13 416 64 408.9 64 400S71.13 384 80 384h12.38c4.875 0 9.125-3.125 10.62-7.625l18.25-54.63C124.5 311.9 133.6 305.3 144 305.3s19.5 6.625 22.75 16.5l13.88 41.63c19.75-16.25 54.13-9.75 66 14.12c2 4 6 6.5 10.12 6.5H304z"
      ></path>
    </svg>
  );
};

const CollectionsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 448 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M368 128h-47.95l.0123-80c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48L128 128H80C53.5 128 32 149.5 32 176v256C32 458.5 53.5 480 80 480h16.05L96 496C96 504.9 103.1 512 112 512h32C152.9 512 160 504.9 160 496L160.1 480h128L288 496c0 8.875 7.125 16 16 16h32c8.875 0 16-7.125 16-16l.0492-16H368c26.5 0 48-21.5 48-48v-256C416 149.5 394.5 128 368 128zM176.1 48h96V128h-96V48zM336 384h-224C103.2 384 96 376.8 96 368C96 359.2 103.2 352 112 352h224c8.801 0 16 7.199 16 16C352 376.8 344.8 384 336 384zM336 256h-224C103.2 256 96 248.8 96 240C96 231.2 103.2 224 112 224h224C344.8 224 352 231.2 352 240C352 248.8 344.8 256 336 256z"
      ></path>
    </svg>
  );
};

const SharpSmartDashboardIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M448 32C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H448zM224 256V160H64V256H224zM64 320V416H224V320H64zM288 416H448V320H288V416zM448 256V160H288V256H448z"
      ></path>
    </svg>
  );
};

const SharpSmartStockIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 576 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M560 448H512V113.5c0-27.25-21.5-49.5-48-49.5L352 64.01V128h96V512h112c8.875 0 16-7.125 16-15.1v-31.1C576 455.1 568.9 448 560 448zM280.3 1.007l-192 49.75C73.1 54.51 64 67.76 64 82.88V448H16c-8.875 0-16 7.125-16 15.1v31.1C0 504.9 7.125 512 16 512H320V33.13C320 11.63 300.5-4.243 280.3 1.007zM232 288c-13.25 0-24-14.37-24-31.1c0-17.62 10.75-31.1 24-31.1S256 238.4 256 256C256 273.6 245.3 288 232 288z"
      ></path>
    </svg>
  );
};

const SharpSmartStockHistoryIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C201.7 512 151.2 495 109.7 466.1C95.2 455.1 91.64 436 101.8 421.5C111.9 407 131.8 403.5 146.3 413.6C177.4 435.3 215.2 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C202.1 64 155 85.46 120.2 120.2L151 151C166.1 166.1 155.4 192 134.1 192H24C10.75 192 0 181.3 0 168V57.94C0 36.56 25.85 25.85 40.97 40.97L74.98 74.98C121.3 28.69 185.3 0 255.1 0L256 0zM256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z"
      ></path>
    </svg>
  );
};

const icons = {
  'Shout feed': <StarRoundedIcon />,
  'Send shout': <MediIcon />,
  History: <HistoryIcon />,
  Inbox: <ArchiveOutlinedIcon />,
  'Notification settings': <NotificationsOffOutlinedIcon />,
  'Users list': <SupervisorAccountOutlinedIcon />,
  'Shout reports': <FileOpenOutlinedIcon />,
  'Collection reports': <CollectionReportsIcon />,
  'SharpSmart reports': <SharpSmartReportsIcon />,
  'Faulty scopes': <FaultyScopeIcon />,
  'Scan&Go Collections': <CollectionsIcon />,
  'SharpSmart dashboard': <SharpSmartDashboardIcon />,
  'Bin stock': <SharpSmartStockIcon />,
  'Bin stock history': <SharpSmartStockHistoryIcon />,
  'Bulk update': <BulkUpdateIcon />,
};

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
                  {icons[text]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontSize: 15,
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
                    {icons[text]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                    primaryTypographyProps={{
                      fontSize: 15,
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
                    {icons[text]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                    primaryTypographyProps={{
                      fontSize: 15,
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
          {['Faulty scopes', 'Scan&Go Collections'].map((text, index) => (
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
                  {icons[text]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontSize: 15,
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
          {['SharpSmart dashboard', 'Bin stock', 'Bin stock history'].map(
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
                    {icons[text]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: open ? 1 : 0 }}
                    primaryTypographyProps={{
                      fontSize: 15,
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
          {['Bulk update'].map((text, index) => (
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
                  {icons[text]}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ opacity: open ? 1 : 0 }}
                  primaryTypographyProps={{
                    fontSize: 15,
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
