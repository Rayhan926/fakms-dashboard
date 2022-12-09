import { cx } from "../../../config/constants";
import useMasterData from "../../../hooks/useMasterData";
import TableRowActions from "../TableRowActions";

const grid = "grid grid-cols-[300px,200px,150px,50px]";

const Table = () => {
  const { filteredRows, deleteRow, setEditRowId, setIsOpenEditModal } =
    useMasterData();
  return (
    <div className="mt-5 max-w-[730px] overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <div className="min-w-[720px] overflow-hidden">
        <div className="border-b border-slate-200 bg-gray-200">
          <div className={cx(grid, "uppercase [&>p]:px-6 [&>p]:py-3")}>
            <p>name</p>
            <p>description</p>
            <p>station</p>
            <p></p>
          </div>
        </div>
        <div>
          {filteredRows.length <= 0 ? (
            <p className="text-center px-5 py-4 text-lg">No data found</p>
          ) : (
            filteredRows.map(({ description, name, id, station }) => (
              <div
                className={cx(
                  grid,
                  "[&>p]:px-6 [&>p]:py-3 border-b border-slate-200 last:border-b-0",
                )}
                key={id}
              >
                <p>{name || "- - -"}</p>
                <p>{description || "- - -"}</p>
                <p>{station || "- - -"}</p>
                <p className="flex justify-end">
                  <TableRowActions
                    onDelete={() =>
                      window.confirm("Are you sure") && deleteRow(id)
                    }
                    onEdit={() => {
                      setEditRowId(id);
                      setIsOpenEditModal(true);
                    }}
                  />
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
// const Table = () => {
//   const { filteredRows, deleteRow, setEditRowId, setIsOpenEditModal } =
//     useMasterData();
//   return (
//     <div className="mt-5 overflow-hidden rounded-lg border border-slate-200 bg-white w-[700px]">
//       <table className="border-collapse w-full">
//         <thead className="border-b border-slate-200 bg-gray-200">
//           <tr className="[&>th]:text-left [&>th]:font-normal [&>th]:uppercase [&>th]:px-6 [&>th]:py-3">
//             <th>name</th>
//             <th>description</th>
//             <th>station</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredRows.length <= 0 ? (
//             <tr>
//               <td colSpan={10}>
//                 <p className="text-center px-5 py-7 text-lg">No data found</p>
//               </td>
//             </tr>
//           ) : (
//             filteredRows.map(({ description, name, id, station }) => (
//               <tr
//                 className="[&>td]:text-left [&>td]:font-normal [&>td]:px-6 [&>td]:py-3 border-b border-slate-200 last:border-b-0"
//                 key={id}
//               >
//                 <td>{name || "- - -"}</td>
//                 <td>{description || "- - -"}</td>
//                 <td>{station || "- - -"}</td>
//                 <td className="flex justify-end">
//                   <TableRowActions
//                     onDelete={() =>
//                       window.confirm("Are you sure") && deleteRow(id)
//                     }
//                     onEdit={() => {
//                       setEditRowId(id);
//                       setIsOpenEditModal(true);
//                     }}
//                   />
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default Table;
