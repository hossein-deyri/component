import MuiStyles from '@/ts/types/MuiStyles';

const CHIP_MARGIN = 0.4;

const searchChipWrapperStyles: MuiStyles = () => ({
  chipWrapper: {
    minHeight: '2.6rem',
    width: '1100px',
    m: `0 ${-CHIP_MARGIN}rem 2rem`,
    '.slick-track': {
      width: '100% !important',
      padding: '0px 0px',
      transform: 'translate3d(0px, 0px, 0px)',
      display: 'flex',
      justifyContent: 'end'
    }
  },

  chip: {
    backgroundColor: '#272727',
    border: 'none',
    height: '2.6rem',
    m: CHIP_MARGIN,

    '.MuiChip-label': {
      p: '0 0.6rem 0 0.4rem'
    }
  },

  chipLabel: {
    display: 'flex',
    alignItems: 'center'
  },

  chipLabelIcon: {
    width: 16,
    height: 16,
    mx: 0.4
  },

  chipLabelText: {
    mr: 0.8,
    fontSize: 12,
    fontWeight: 200
  }
});

export default searchChipWrapperStyles;
