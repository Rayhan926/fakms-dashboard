import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import { currencies } from "../config/constants";
import { MasterDataContextType, Row } from "../config/types";
// import {v4 as uuid} from 'uuid'

const MasterDataContext = createContext<MasterDataContextType>(null!);

export const MasterDataProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [editRowId, setEditRowId] = useState<string | null>(null!);
  const [searchValue, setSearchValue] = useState("");
  const [rows, setRows] = useState<Row[]>([
    {
      id: "1",
      name: currencies[0].label,
      description: "",
      station: "",
    },
  ]);
  console.log({ editRowId, isOpenEditModal });
  const addInitialRow = (initialRow: Row) => {
    setRows([initialRow]);
  };

  const addNewRow = (newRow: Row) =>
    setRows((prevRows) => [...prevRows, newRow]);

  const deleteRow = (rowId: string) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== rowId));
  };

  const editRow = (rowId: string, newRowData: Partial<Row>) => {
    setRows((prevRows) => {
      return prevRows.map((row) => {
        if (row.id === rowId) {
          return {
            ...row,
            ...newRowData,
          };
        }

        return row;
      });
    });
  };

  const filteredRows = useMemo(() => {
    if (!searchValue) return rows;

    const lowerCaseSearch = searchValue.toLowerCase();

    return rows.filter(
      (row) =>
        row.name.toLowerCase().includes(lowerCaseSearch) ||
        row.description.toLowerCase().includes(lowerCaseSearch) ||
        row.station.toLowerCase().includes(lowerCaseSearch),
    );
  }, [rows, searchValue]);

  return (
    <MasterDataContext.Provider
      value={{
        rows,
        addInitialRow,
        addNewRow,
        deleteRow,
        editRow,
        searchValue,
        setSearchValue,
        filteredRows,
        editRowId,
        setEditRowId,
        setIsOpenEditModal,
        isOpenEditModal,
      }}
    >
      {children}
    </MasterDataContext.Provider>
  );
};

const useMasterData = () => useContext(MasterDataContext);

export default useMasterData;
