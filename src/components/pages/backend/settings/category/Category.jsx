import { setIsAdd, setIsConfirm, setIsDelete } from '@/components/store/storeAction'
import { StoreContext } from '@/components/store/storeContext'
import { Archive, ArchiveRestore, FilePenLine, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import Pills from '../../partials/Pills'
import ModalConfirm from '../../partials/modals/ModalConfirm'
import ModalDelete from '../../partials/modals/ModalDelete'
import ModalAddCategory from './ModalAddCategory'

const Category = () => {
    const {store, dispatch } = React.useContext(StoreContext);

    const handleDelete = () => {
      dispatch(setIsDelete(true));
    }
    const handleRestore = () => {
      dispatch(setIsConfirm(true));
    }
    const handleArchive = () => {
      dispatch(setIsConfirm(true));
    }
    const handleAdd = () => {
      dispatch(setIsAdd(true));
    }
  return (
    
    <>
        <div className="bg-secondary p-4 mt-5 border border-line rounded-md">
                <button className='btn btn-add' onClick={handleAdd}><Plus size={16}/>Add New</button>


                        <div className="table-wrapper custom-scroll mt-5 max-h-[65vh]">
                        {/* <TableLoader count={10} cols={4}/> */}
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Status</th>
                              <th className='w-[50%]'>Category</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <tr>
                              <td colSpan={100}>
                                <IconNoData/>
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={100}>
                                <IconServerError/>
                              </td>
                            </tr> */}
                            {Array.from(Array(17).keys()).map((i) => (
                              <tr key={i}>
                              <td>{i+1}.</td>
                              <td><Pills/></td>
                              <td>RomCom</td>
                              <td>
                                <ul className="table-action ">
                                  {true ? (<>
                                  <li>
                                    <button className='tooltip' data-tooltip="Edit" onClick={() => handleAdd()}><FilePenLine /></button>
                                  </li>
                                  <li><button className='tooltip' data-tooltip="Archive" onClick={() => handleArchive()}><Archive/></button></li>
                                  </>) : (<>
                                    <li>
                                    <button className='tooltip' data-tooltip="Restore" onClick={() => handleRestore()}><ArchiveRestore /></button>
                                    </li>
                                  <li>
                                    <button className='tooltip' data-tooltip="Delete" onClick={() => handleDelete()}><Trash2 /></button>
                                    </li>
                                  </>)}
                                </ul>
                              </td>
                            </tr>
                            ))}
                            
                          </tbody>
                        </table>
                      </div>

                        </div>
                        {store.isAdd && <ModalAddCategory/>}
                        {store.isDelete && <ModalDelete/>}
                      {store.isConfirm && <ModalConfirm/>}
    </>
  )
}

export default Category