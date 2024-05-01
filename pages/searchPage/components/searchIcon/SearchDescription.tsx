import { Grid } from '@mui/material';
import SearchComponentNotFound from '@/components/icons/SearchNotFoundIcon';
import SearchComponentNoData from '@/components/icons/SearchNoDataIcon';
import searchDescriptionStyles from './searchDescriptionStyles';

interface Props {
  icon: string;
}

const SearchDescription: React.FC<Props> = ({ icon }) => {
  const classes = searchDescriptionStyles();
  return (
    <Grid container sx={classes.searchIcon}>
      {icon === 'notFound' ? (
        <>
          <Grid item component="span">متأسفانه محتوایی یافت نشد.</Grid>
          <SearchComponentNotFound />
        </>
      ) : (
        <>
          <Grid item component="span">
            فیلم، سریال یا بازیگر مورد نظر خود را جستجو کنید و یا از فیلترهای
            موجود استفاده کنید
          </Grid>
          <SearchComponentNoData />
        </>
      )}
    </Grid>
  );
};
export default SearchDescription;
