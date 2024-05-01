import {
  Button,
  Divider,
  Grid,
  SwipeableDrawer,
  Theme,
  Typography,
  useMediaQuery
} from '@mui/material';
import SearchFilters from '../searchFilters/SearchFilters';
import searchMobileFilterStyles from './searchMobileFilterStyles';
import useSearchMobileFilter from './useSearchMobileFilter';
import { useAppDispatch } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';
import { MdClose } from 'react-icons/md';

const SearchMobileFilter: React.FC = () => {
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));
  const classes = searchMobileFilterStyles();
  const dispatch = useAppDispatch();
  const { isOpen, deleteAllFilterHandler } = useSearchMobileFilter();

  return (
    <>
      <SwipeableDrawer
        anchor={'bottom'}
        open={isOpen}
        onClose={() => dispatch(searchSlice.actions.toggleMobileModal())}
        onOpen={() => {}}
        sx={classes.swipeableDrawer}
      >
        {!isXl && (
          <>
            <Grid container sx={classes.headerFilter}>
              <Grid item>
                <Typography>فیلتر ها</Typography>
              </Grid>
              <Grid item>
                <div
                  onClick={() =>
                    dispatch(searchSlice.actions.toggleMobileModal())
                  }
                >
                  <MdClose />
                </div>
              </Grid>
            </Grid>
            <Divider />
          </>
        )}
        <SearchFilters />
        {!isXl && (
          <Grid container sx={classes.mobileFilter}>
            <Grid item>
              <Button
                sx={classes.button}
                variant="contained"
                onClick={() =>
                  dispatch(searchSlice.actions.toggleMobileModal())
                }
              >
                مشاهده نتایج
              </Button>
            </Grid>
            <Grid item>
              <Button
                sx={classes.button}
                variant="outlined"
                onClick={deleteAllFilterHandler}
              >
                حذف فیلتر ها
              </Button>
            </Grid>
          </Grid>
        )}
      </SwipeableDrawer>
    </>
  );
};
export default SearchMobileFilter;
