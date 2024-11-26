import React from 'react'
import ModalWrapper from '../../partials/modals/ModalWrapper'
import { setIsAdd } from '@/components/store/storeAction'
import { StoreContext } from '@/components/store/storeContext'
import { X } from 'lucide-react'
import SpinnerButton from '../../partials/spinners/SpinnerButton'
import * as Yup from "Yup";
import { InputText } from '@/components/helpers/FormInputs'
import { Form, Formik } from 'formik'

const ModalAddGenre = () => {
    const {dispatch} = React.useContext(StoreContext)

    const handleClose = () => {
      dispatch(setIsAdd(false));
    }
    const initVal = {
        genre: "",
    };
    const yupSchema = Yup.object({
     genre: Yup.string().required("Required"),
    });
  return (
    <>
    <ModalWrapper>

    <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            console.log(values)
        }}
      >
        {(props) => {
          return (

            <Form>
            <div className="modal-main bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full rounded-md border border-line">

                <div className="modal-header flex gap-2 p-2 items-center border-b border-light mb-2">
                    <span className='text-body' onClick={handleClose}>Add Genre</span>
                    <button className="ml-auto" onClick={handleClose}><X/></button>
                </div>

                <div className="modal-body p-2 py-4">

                        <div className="input-wrap">
                        <InputText
                            label = "Add Genre"
                            type="text"
                            name="genre">
                            </InputText>
                        </div>

                    <div className='flex justify-end gap-3 mt-5 text-[14px]'>
                        <button className='btn btn-info' type='submit'><SpinnerButton/>Save</button>
                        <button className='btn btn-cancel' type='reset' onClick={handleClose}>Cancel</button>
                    </div>

                </div>

            </div>
            </Form>
            );
          }}
        </Formik>
            </ModalWrapper>
    </>
  )
}

export default ModalAddGenre