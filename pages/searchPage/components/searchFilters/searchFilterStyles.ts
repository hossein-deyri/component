import MuiStyles from '@/ts/types/MuiStyles';

const searchFilterStyles: MuiStyles = () => ({
  content: {
    borderRadius: '1.6rem',
    display: 'flex',
    minWidth: '38.5rem',
    height: {
      xs: '100%',
      xl: 'fit-content'
    },
    top: {
      xl: '3rem'
    },
    flexDirection: 'column',
    gap: 1,
    position: {
      xs: 'relative',
      xl: 'sticky'
    },
    padding: {
      xs: '3rem 3rem 6rem 3rem',
      xl: '2rem 2rem 0rem 2rem'
    },
    background: {
      xs: 'none',
      xl: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
    },
    overflowY: {
      xs: 'scroll',
      xl: 'hidden'
    }
  },
});

export default searchFilterStyles;
