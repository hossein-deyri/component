import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import searchSlice from '@/redux/slices/searchSlice';
const useSearchMobileFilter = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.search.isOpenMobileFilter);
  const deleteAllFilterHandler = () => {
    dispatch(searchSlice.actions.toggleMobileModal());
    dispatch(searchSlice.actions.deleteAllFilters());
  };

  return {
    isOpen,
    deleteAllFilterHandler
  };
};

export default useSearchMobileFilter;
