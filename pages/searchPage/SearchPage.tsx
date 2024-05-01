import searchPageStyles from './searchPageStyles';
import { Divider, Grid, Theme, useMediaQuery } from '@mui/material';
import SearchFilters from './components/searchFilters/SearchFilters';
import SearchInput from './components/searchInput/SearchInput';
import SearchContent from './components/searchContent/SearchContent';
import SearchMobileFilter from './components/searchMobileFilter/SearchMobileFilter';

const SearchPage = () => {
  const classes = searchPageStyles();
  const isXl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));

  return (
    <Grid sx={classes.layout}>
      <Divider sx={classes.divider} />
      <Grid container spacing={2.4} sx={classes.container}>
        {isXl ? (
          <Grid item>
            <SearchFilters />
          </Grid>
        ) : (
          <SearchMobileFilter />
        )}
        <Grid item sx={classes.content}>
          <SearchInput />
          <SearchContent />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchPage;
