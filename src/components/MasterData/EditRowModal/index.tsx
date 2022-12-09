import { Formik } from "formik";
import { BiPlus } from "react-icons/bi";
import useMasterData from "../../../hooks/useMasterData";
import FormikInput from "../../FormikInput";
import OverlayModal from "../../OverlayModal";

const EditRowModal = () => {
  const {
    editRow,
    rows,
    editRowId,
    setEditRowId,
    isOpenEditModal,
    setIsOpenEditModal,
  } = useMasterData();

  const row = rows.find((row) => row.id === editRowId) || {
    description: "",
    name: "",
    station: "",
    id: "",
  };
  console.log({ row });

  const resetHandler = () => {
    setIsOpenEditModal(false);
    setEditRowId(null);
  };

  return (
    <div>
      <OverlayModal open={isOpenEditModal} onClose={resetHandler}>
        <div className="py-5 px-6 h-full flex flex-col">
          <h4 className="text-2xl font-medium">Edit row: {row.name}</h4>
          <Formik
            initialValues={{
              name: row.name,
              description: row.description,
              station: row.station,
            }}
            enableReinitialize
            onSubmit={(values, actions) => {
              editRow(editRowId!, values);
              resetHandler();
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
                      onClick={resetHandler}
                      type="button"
                      className="__btn __btn_gray"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="__btn">
                      Edit
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

export default EditRowModal;
