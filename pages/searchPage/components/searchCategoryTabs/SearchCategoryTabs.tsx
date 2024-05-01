import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useSearchCategoryTabs from './useSearchCategoryTabs';
import searchCategoryTabsStyle from './searchCategoryTabsStyle';
import CATEGORIES from '@/ts/enums/CATEGORIES';

const SearchCategoryTabs = () => {
  const classes = searchCategoryTabsStyle();
  const { handleChangeTabs, a11yProps, selectedCategoryTab } =
    useSearchCategoryTabs();

  return (
    <Tabs
      value={selectedCategoryTab}
      sx={classes.tabsWrapper}
      onChange={handleChangeTabs}
    >
      <Tab disableRipple label="همه" {...a11yProps('all')} sx={classes.tab} />
      <Tab
        disableRipple
        label="فیلم"
        {...a11yProps(CATEGORIES.MOVIE)}
        sx={classes.tab}
      />
      <Tab
        disableRipple
        label="سریال"
        {...a11yProps(CATEGORIES.SERIES)}
        sx={classes.tab}
      />
    </Tabs>
  );
};
export default SearchCategoryTabs;
