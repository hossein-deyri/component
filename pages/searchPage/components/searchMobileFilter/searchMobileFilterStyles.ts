import STYLES from '@/constants/STYLES';
import MuiStyles from '@/ts/types/MuiStyles';

const searchMobileFilterStyles: MuiStyles = () => ({
  swipeableDrawer: {
    '& > .MuiPaper-root': {
      height: `calc(100% - ${STYLES.headerHeight})`,
      maxHeight: '70%',
      overflow: 'hidden',
      backgroundColor: (theme) => theme.palette.background.paper,
      borderRadius: '2rem 2rem 0 0'
    }
  },
  headerFilter: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.6rem 3rem'
  },
  mobileFilter: {
    backgroundColor: (theme) => theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem 0',
    position: 'fixed',
    bottom: '0'
  },
  button: {
    width: '15rem'
  }
});

export default searchMobileFilterStyles;
