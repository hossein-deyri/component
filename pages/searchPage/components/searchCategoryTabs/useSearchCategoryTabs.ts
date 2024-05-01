import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';
import CATEGORIES from '@/ts/enums/CATEGORIES';

const useSearchCategoryTabs = () => {
  const dispatch = useAppDispatch();

  const handleChangeTabs = (
    event: React.SyntheticEvent,
    newValue: CATEGORIES.MOVIE | CATEGORIES.SERIES | 'all'
  ) => {
    if (newValue === 'all') dispatch(searchSlice.actions.deleteCategory());
    else dispatch(searchSlice.actions.setCategory(newValue));
  };

  const a11yProps = (id: string) => {
    return {
      id: `simple-tab-${id}`,
      'aria-controls': `simple-tabpanel-${id}`,
      value: id
    };
  };

  const selectedCategoryTab =
    useAppSelector((state) => state.search.filters.category?.apiId) || 'all';

  return {
    handleChangeTabs,
    a11yProps,
    selectedCategoryTab
  };
};

export default useSearchCategoryTabs;
