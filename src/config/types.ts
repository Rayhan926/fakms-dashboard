import { ReactNode } from "react";

export type InputProps = React.ComponentProps<"input">;

export type ButtonProps = {
  loading?: boolean;
} & React.ComponentProps<"button">;

export type AuthContext = {
  user?: User;
  selectedShop?: Shop;
  login: (user: User) => void;
  logout: () => void;
};

export type User = {
  email: string;
  token: string;
  shops: Shop[];
};
export type Shop = {
  address: string;
  createdAt: string;
  id: string;
  name: string;
};

export type CalendarProps = {
  onSelect: (e: Date) => void;
  value: Date;
};

export type ProfileOptions = {
  icon: ReactNode;
  text: string;
  props?: React.ComponentProps<"button">;
};

export type Row = {
  id: string;
  name: string;
  description: string;
  station: string;
};
export type MasterDataContextType = {
  rows: Row[];
  filteredRows: Row[];
  addInitialRow: (initialRow: Row) => void;
  addNewRow: (newRow: Row) => void;
  deleteRow: (rowId: string) => void;
  editRow: (rowId: string, newRowData: Partial<Row>) => void;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  editRowId: string | null;
  setEditRowId: React.Dispatch<React.SetStateAction<string | null>>;
  isOpenEditModal: boolean;
  setIsOpenEditModal: React.Dispatch<React.SetStateAction<boolean>>;
};
