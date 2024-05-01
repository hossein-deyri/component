import MuiStyles from '@/ts/types/MuiStyles';

const searchCategoryTabsStyle: MuiStyles = () => ({
  tabsWrapper: {
    backgroundColor: (theme) => ({
      xs: theme.palette.background.paper,
      xl: theme.palette.background.default
    }),
    borderRadius: '0.4rem',
    padding: '0.5rem 0.8rem',
    minHeight: '3.2rem',
    marginBottom: {
      xs: '1.6rem',
      xl: 0
    },
    '& .MuiTabs-indicator': {
      height: '100%',
      borderRadius: '0.4rem'
    },
    '& .MuiTabs-flexContainer': {
      zIndex: 1,
      position: 'relative'
    }
  },
  tab: {
    flex: 1,
    minWidth: 'unset',
    minHeight: 'unset',
    fontSize: '1.2rem',
    fontWeight: '400',
    borderRadius: '0.4rem',
    padding: '0.45rem 1.6rem',

    '&.Mui-selected': {
      color: (theme) => theme.palette.primary.contrastText
    }
  }
});

export default searchCategoryTabsStyle;
