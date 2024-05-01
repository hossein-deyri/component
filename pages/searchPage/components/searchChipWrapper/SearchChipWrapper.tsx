import { Chip, Grid, Icon, Typography } from '@mui/material';
import searchChipWrapperStyles from './searchChipWrapperStyles';
import useSearchChipWrapper from './useSearchChipWrapper';
import Slider from 'react-slick';

const SearchChipWrapper = () => {
  const classes = searchChipWrapperStyles();
  const { chipList } = useSearchChipWrapper();
  console.log('🚀 ~ SearchChipWrapper ~ chipList:', chipList);

  const settings = {
    dots: true,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    rtl: false,
    useTransform: false
  };
  return (
    <>
      {!!chipList?.length && (
        <Grid sx={classes.chipWrapper} className="border">
          <Slider {...settings} className="border">
            {chipList?.map((chip) => (
              <Chip
                key={chip.apiId}
                sx={classes.chip}
                color="default"
                variant="outlined"
                label={
                  <Grid item sx={classes.chipLabel}>
                    <Icon component={chip.Icon} sx={classes.chipLabelIcon} />
                    <Typography sx={classes.chipLabelText}>
                      {chip.chipName}
                    </Typography>
                  </Grid>
                }
                onDelete={() => chip.onDelete(chip.apiId)}
                className="border"
              />
            ))}
          </Slider>
        </Grid>
      )}
    </>
  );
};

export default SearchChipWrapper;
