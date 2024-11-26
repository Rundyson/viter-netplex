import { Archive, ArchiveRestore, FilePenLine, FileVideo, Moon, Plus, Search, Settings, Trash2 } from 'lucide-react';
import React from 'react'
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import SideNavigation from '../partials/SideNavigation';
import SearchBar from '../partials/SearchBar';
import Pills from '../partials/Pills';
import ModalDelete from '../partials/modals/ModalDelete';
import ModalConfirm from '../partials/modals/ModalConfirm';
import ModalValidation from '../partials/modals/ModalValidation';
import ModalError from '../partials/modals/ModalError';
import ToastSuccess from '../partials/ToastSuccess';
import LoadMore from '../partials/LoadMore';
import SpinnerWindow from '../partials/spinners/SpinnerWindow';
import SpinnerTable from '../partials/spinners/SpinnerTable';
import TableLoader from '../partials/TableLoader';
import IconNoData from '../partials/IconNoData';
import IconServerError from '../partials/IconServerError';
import ModalAddMovie from './ModalAddMovie';
import MoviesTable from './MoviesTable';
import ModalViewMovie from './ModalViewMovie';
import { setIsAdd, setMessage } from '@/components/store/storeAction';
import { StoreContext } from '@/components/store/storeContext';

const Movies = () => {
  // const {dispatch} = React.useContext(StoreContext);
  const {dispatch, store} = React.useContext(StoreContext)

  const handleAdd = () => {
    dispatch(setIsAdd(true));
  }
  return (
    <>
        <section className="layout-main">
            <div className="layout-division">
            <SideNavigation menu="movies"/>
                <main>
                    <Header title="Movies" subtitle="List of available movies"/>
                    <div className="p-8">
                      <div className="flex justify-between items-center">
                        <SearchBar/>
                        <button className="btn btn-add" onClick={handleAdd}>
                          <Plus size={16}/> Add New
                        </button>
                      </div>
                      <MoviesTable/>
                    </div>
                    <Footer/>
                </main>
            </div>
        </section>

        
        {store.validate && <ModalValidation/>}
        {store.error && <ModalError/>}
      {store.success && <ToastSuccess/>}
        {/* <SpinnerWindow/> */}
        {store.isAdd && <ModalAddMovie/>}
        
    </>
  );
};

export default Movies