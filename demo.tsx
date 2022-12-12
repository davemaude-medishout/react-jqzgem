import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MUIList from '@mui/material/List';
import Tooltip from '@mui/material/Tooltip';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HistoryIcon from '@mui/icons-material/History';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationAddOutlinedIcon from '@mui/icons-material/NotificationAddOutlined';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import DatasetIcon from '@mui/icons-material/DatasetOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
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
        d="M19.1169 9.88399C16.9642 6.08357 12.3718 4.11249 7.96166 5.38668C2.83334 6.86838 -0.10826 12.177 1.3914 17.2439C1.55625 17.8009 2.14689 18.1204 2.71063 17.9575C3.27437 17.7946 3.59773 17.2111 3.43287 16.6541C2.26292 12.7012 4.5578 8.55963 8.55864 7.40369C11.7014 6.49568 14.9606 7.7001 16.7816 10.1726L17.2363 10.7899L16.4902 10.9889C15.9189 11.1413 15.0384 11.3757 13.686 11.7353C13.4912 11.7869 13.3463 11.9475 13.3165 12.1438C13.2867 12.3407 13.3778 12.5366 13.5483 12.6428L19.1461 16.115C19.3956 16.2699 19.7254 16.1824 19.8631 15.925L22.9538 10.1526C22.9538 10.1525 22.9538 10.1525 22.9538 10.1525C23.0616 9.95117 22.9538 9.6709 22.9018 9.60601L22.9018 9.60598C22.7763 9.4506 22.5695 9.38352 22.3752 9.43495L21.272 9.72569L21.272 9.72572L20.345 9.96994L20.3449 9.96993L20.3449 9.96996L19.7178 10.1351L19.3186 10.2402L19.1169 9.88399Z"
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.18 22.9999H11.32V22.9799C13.89 22.9799 16.34 21.9699 18.22 20.1299C20.14 18.2599 21.25 15.6899 21.27 13.0699C21.29 10.3499 20.21 7.73989 18.22 5.72989C16.13 3.60989 13.22 2.37989 10.25 2.37989C10.238 2.37989 10.226 2.38011 10.2141 2.38053C9.85631 1.88883 9.27622 1.56989 8.62001 1.56989H6.66001C6.02841 1.56989 5.46733 1.86536 5.1071 2.32594C4.68882 2.20467 4.58747 1.95722 4.57 1.86989C4.51 1.34989 4.05 0.959892 3.52001 0.999892C2.99001 1.03989 2.58001 1.46989 2.58001 1.99989V4.91989C2.58001 5.43989 2.98001 5.84989 3.49001 5.89989H3.58001V5.88989C4.06001 5.88989 4.48001 5.53989 4.57 5.05989C4.59354 4.95007 4.67245 4.72335 4.99015 4.58725C5.33821 5.14197 5.95521 5.50989 6.66001 5.50989H8.62001C9.40859 5.50989 10.0873 5.04929 10.4023 4.3818C12.7892 4.43184 15.116 5.42632 16.81 7.13989C18.42 8.76989 19.3 10.8699 19.28 13.0599C19.26 15.1499 18.37 17.2099 16.83 18.7099C15.3 20.2099 13.3 21.0399 11.22 20.9899C9.23001 20.9699 7.30001 20.1299 5.92001 18.6999C4.64001 17.3799 3.96001 15.6999 4.00001 13.9499C4.04001 12.2899 4.77001 10.6699 6.00001 9.49989C7.21001 8.34989 8.77001 7.74989 10.39 7.78989C11.91 7.83989 13.38 8.49989 14.42 9.61989C15.36 10.6299 15.84 11.9099 15.79 13.2099C15.74 14.4299 15.18 15.6099 14.25 16.4499C13.36 17.2599 12.24 17.6599 11.08 17.5999C10.01 17.5399 9.00001 17.0499 8.30001 16.2499C7.70001 15.5599 7.4 14.6999 7.47001 13.8399C7.53 13.0499 7.92001 12.3099 8.54001 11.7999C9.10001 11.3399 9.79001 11.1299 10.48 11.1999C11.03 11.2599 11.52 10.8599 11.58 10.3099C11.64 9.75989 11.24 9.26989 10.69 9.20989C9.46001 9.06989 8.24001 9.44989 7.26001 10.2599C6.23001 11.1199 5.58001 12.3599 5.47001 13.6799C5.36001 15.0799 5.83001 16.4599 6.79001 17.5599C7.84 18.7599 9.36001 19.4999 10.96 19.5899C12.66 19.6899 14.3 19.0999 15.59 17.9299C16.91 16.7299 17.72 15.0399 17.79 13.2899C17.87 11.4499 17.2 9.65989 15.89 8.25989C14.49 6.75989 12.51 5.85989 10.45 5.79989C8.29001 5.72989 6.22001 6.53989 4.62001 8.05989C3.00001 9.58989 2.05001 11.7299 2.00001 13.9099C1.95001 16.1899 2.83001 18.3899 4.47001 20.0899C6.22001 21.9099 8.67001 22.9699 11.18 22.9999ZM6.19001 3.53989C6.19001 3.27989 6.4 3.06989 6.66001 3.06989H8.62001C8.88001 3.06989 9.09001 3.27989 9.09001 3.53989C9.09001 3.79989 8.88001 4.00989 8.62001 4.00989H6.66001C6.4 4.00989 6.19001 3.79989 6.19001 3.53989Z"
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

const SpaceDashboardIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 19V5h6v14H5zm14 0h-6v-7h6v7zm0-9h-6V5h6v5z"
      />
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
  Feed: <DynamicFeedOutlinedIcon />,
  Shout: <MediIcon />,
  History: <HistoryIcon />,
  Inbox: <ArchiveOutlinedIcon />,
  'Notification settings': <NotificationsOffOutlinedIcon />,
  'Users list': <SupervisorAccountOutlinedIcon />,
  Reports: <FileOpenOutlinedIcon />,
  'Scan&Go reports': <FileOpenOutlinedIcon />,
  'SharpSmart reports': <FileOpenOutlinedIcon />,
  'Faulty scopes': <FaultyScopeIcon />,
  'Scan&Go dashboard': <SpaceDashboardIcon />,
  'SharpSmart dashboard': <SpaceDashboardIcon />,
  'SharpSmart stock': <DatasetIcon />,
  'SharpSmart stock history': <HistoryIcon />,
  'Bulk update': <BulkUpdateIcon />,
  'Visitor bookings': <SpaceDashboardIcon />,
  'NPS dashboard': <SpaceDashboardIcon />,
  Channels: <InventoryOutlinedIcon />,
  'Form builder': <DynamicFormOutlinedIcon />,
  'Send notification': <NotificationAddOutlinedIcon />,
  'Notification history': <NotificationsOutlinedIcon />,
  'User search': <PersonSearchOutlinedIcon />,
  'User permissions': <AdminPanelSettingsOutlinedIcon />,
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

const List = styled(MUIList)({
  // default state
  '&& .MuiListItem-root, && .MuiListItemIcon-root': {
    color: '#B1B0B0',
  }, // selected and (selected + hover) states
  '&& .Mui-selected, && .Mui-selected:hover': {
    '&, & .MuiListItemIcon-root': {
      color: '#17C78A',
    },
  },
  // hover states
  '& .MuiListItemButton-root:hover': {
    backgroundColor: '#505251',
    '&, & .MuiListItemIcon-root': {
      color: '#17C78A',
    },
  },
});

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
        {/* History > Action List */}
        <List>
          {['Shout', 'Feed', 'History'].map((text, index) => (
            <Tooltip
              title={
                open ? null : <Typography fontSize={15}>{text}</Typography>
              }
              aria-label={text}
              placement="right"
              arrow
              enterDelay={0}
              leaveDelay={100}
            >
              <ListItem
                key={text}
                disablePadding
                sx={{ display: 'block' }}
                selected={index % 3 === 0 ? 'true' : null}
              >
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
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Inbox', 'Reports'].map((text, index) => (
            <Tooltip
              title={
                open ? null : <Typography fontSize={15}>{text}</Typography>
              }
              aria-label={text}
              placement="right"
              arrow
              enterDelay={0}
              leaveDelay={100}
            >
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
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Faulty scopes'].map((text, index) => (
            <Tooltip
              title={
                open ? null : <Typography fontSize={15}>{text}</Typography>
              }
              aria-label={text}
              placement="right"
              arrow
              enterDelay={0}
              leaveDelay={100}
            >
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
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Visitor bookings'].map((text, index) => (
            <Tooltip
              title={
                open ? null : <Typography fontSize={15}>{text}</Typography>
              }
              aria-label={text}
              placement="right"
              arrow
              enterDelay={0}
              leaveDelay={100}
            >
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
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Scan&Go dashboard', 'Scan&Go reports'].map((text, index) => (
            <Tooltip
              title={
                open ? null : <Typography fontSize={15}>{text}</Typography>
              }
              aria-label={text}
              placement="right"
              arrow
              enterDelay={0}
              leaveDelay={100}
            >
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
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {[
            'SharpSmart dashboard',
            'SharpSmart stock',
            'SharpSmart history',
            'SharpSmart reports',
          ].map((text, index) => (
            <Tooltip
              title={
                open ? null : <Typography fontSize={15}>{text}</Typography>
              }
              aria-label={text}
              placement="right"
              arrow
              enterDelay={0}
              leaveDelay={100}
            >
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
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          ))}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {['Bulk update', 'Notification settings', 'Users list'].map(
            (text, index) => (
              <Tooltip
                title={
                  open ? null : <Typography fontSize={15}>{text}</Typography>
                }
                aria-label={text}
                placement="right"
                arrow
                enterDelay={0}
                leaveDelay={100}
              >
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
                    />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            )
          )}
        </List>
        <Divider style={{ backgroundColor: '#505251' }} />
        <List>
          {[
            'Channels',
            'Form builder',
            'Send notification',
            'Notification history',
            'User search',
            'User permissions',
            'NPS dashboard',
          ].map((text, index) => (
            <Tooltip
              title={
                open ? null : <Typography fontSize={15}>{text}</Typography>
              }
              aria-label={text}
              placement="right"
              arrow
              enterDelay={0}
              leaveDelay={100}
            >
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
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
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
