import React from 'react'
import LoadMore from '../partials/LoadMore'
import { Archive, ArchiveRestore, FilePenLine, FileVideo, Trash2 } from 'lucide-react'
import IconServerError from '../partials/IconServerError'
import TableLoader from '../partials/TableLoader'
import IconNoData from '../partials/IconNoData'
import SpinnerTable from '../partials/spinners/SpinnerTable'
import Pills from '../partials/Pills'

const MoviesTable = () => {
  return (
<div className='mt-10 bg-secondary rounded-md p-4 border border-line relative'>
                        {/* <SpinnerTable/> */}
                      <div className="table-wrapper custom-scroll">
                        <TableLoader count={10} cols={4}/>
                        <table>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Status</th>
                              <th>Title</th>
                              <th>Year</th>
                              <th>Duration</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* <tr>
                              <td colSpan={100}>
                                <IconNoData/>
                              </td>
                            </tr> */}
                            <tr>
                              <td colSpan={100}>
                                <IconServerError/>
                              </td>
                            </tr>
                            {Array.from(Array(7).keys()).map((i) => (
                              <tr keys={i}>
                              <td>{i+1}.</td>
                              <td><Pills/></td>
                              <td>Wedding Singer</td>
                              <td>1999</td>
                              <td>1hr 40mins</td>
                              <td>
                                <ul className="table-action ">
                                  {true ? (<>
                                    <li>
                                    <button className='tooltip' data-tooltip="View"><FileVideo /></button>
                                  </li>
                                  <li>
                                    <button className='tooltip' data-tooltip="Edit"><FilePenLine /></button>
                                  </li>
                                  <li><button className='tooltip' data-tooltip="Archive"><Archive/></button></li>
                                  </>) : (<>
                                    <li>
                                    <button className='tooltip' data-tooltip="Restore"><ArchiveRestore /></button>
                                    </li>
                                  <li>
                                    <button className='tooltip' data-tooltip="Delete"><Trash2 /></button>
                                    </li>
                                  </>)}
                                </ul>
                              </td>
                            </tr>
                            ))}
                            
                          </tbody>
                        </table>
                        <LoadMore/>
                      </div>
                      </div>
  )
}

export default MoviesTable