import MuiStyles from '@/ts/types/MuiStyles';

const searchInputStyles: MuiStyles = () => ({
  searchWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    '.MuiFormControl-root  ': {
      display: 'flex'
    },
    '.MuiButtonBase-root': {
      borderRadius: '0.4rem',
      backgroundColor: (theme) => theme.palette.primary.main,
      marginRight: '1rem',
      '&:hover': {
        backgroundColor: (theme) => theme.palette.primary.dark
      },
      '&:hover .MuiBadge-badge': {
        backgroundColor: (theme) => theme.palette.primary.dark
      }
    }
  },
  filterButton: {
    height: '4rem'
  },
  badge: {
    '.MuiBadge-badge': {
      top: '-1rem',
      left: 0,
      border: (theme) => `1px solid${theme.palette.grey[900]}`,
      minWidth: 'unset',
      width: '1.8rem',
      height: '1.8rem',
      fontSize: '1.1rem',
      transform: 'translate(-55%, -50%)'
    }
  },
  textField: {
    '& .MuiInputBase-input': {
      py: 0.85
    },
    marginBottom: '1.6rem'
  },

  startAdornment: {
    mt: '0 !important'
  }
});

export default searchInputStyles;
