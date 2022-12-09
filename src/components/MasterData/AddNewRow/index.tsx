import { Formik } from "formik";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import useMasterData from "../../../hooks/useMasterData";
import FormikInput from "../../FormikInput";
import OverlayModal from "../../OverlayModal";
import { v4 as uuid } from "uuid";

const AddNewRow = () => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);
  const { addNewRow } = useMasterData();
  return (
    <div>
      <button
        onClick={() => setIsOpenAddModal(true)}
        className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-11 h-11 md:w-14 md:h-14 bg-primary flex justify-center items-center hover:scale-110 hover:bg-primary-dark duration-200 rounded-full text-white z-[99]"
      >
        <BiPlus className="w-6 h-6 md:h-8 md:w-8" />
      </button>

      <OverlayModal
        open={isOpenAddModal}
        onClose={() => setIsOpenAddModal(false)}
      >
        <div className="py-5 px-6 h-full flex flex-col">
          <h4 className="text-2xl font-medium">Add New Row</h4>
          <Formik
            initialValues={{
              name: "",
              description: "",
              station: "",
            }}
            onSubmit={(values, actions) => {
              addNewRow({
                id: uuid(),
                ...values,
              });
              setIsOpenAddModal(false);
              actions.resetForm();
            }}
          >
            {({ handleSubmit }) => (
              <>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  className="mt-8 grow flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    <FormikInput name="name" placeholder="Name" />
                    <FormikInput name="description" placeholder="Description" />
                    <FormikInput name="station" placeholder="Station" />
                  </div>
                  <div className="mt-auto flex justify-end gap-3">
                    <button
                      onClick={() => setIsOpenAddModal(false)}
                      type="button"
                      className="__btn __btn_gray"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="__btn">
                      Add
                    </button>
                  </div>
                </form>
              </>
            )}
          </Formik>
        </div>
      </OverlayModal>
    </div>
  );
};

export default AddNewRow;
