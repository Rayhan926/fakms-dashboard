import React, { useRef, useState } from "react";
import { BiDotsVerticalRounded, BiPencil, BiTrash } from "react-icons/bi";
import { usePopper } from "react-popper";
import { useClickAway } from "react-use";
import { cx } from "../../../config/constants";

type TableRowActionsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

const TableRowActions = ({ onDelete, onEdit }: TableRowActionsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownHeadRef = useRef(null!);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
  });

  useClickAway(dropdownHeadRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={dropdownHeadRef}>
      <button
        className="p-1"
        onClick={() => setIsOpen((prev) => !prev)}
        ref={setReferenceElement}
      >
        <BiDotsVerticalRounded size={20} />
      </button>

      <div
        ref={setPopperElement}
        className={cx(
          "w-[170px] z-[9999] pt-3",
          !isOpen && "pointer-events-none hidden",
        )}
        style={styles.popper}
        {...attributes.popper}
      >
        <div
          className={cx(
            "duration-200 bg-white rounded-lg border border-slate-200",
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5 pointer-events-none",
          )}
        >
          <button
            onClick={onEdit}
            className="border-b border-slate-200 px-5 py-2.5 w-full text-left flex items-center gap-3 hover:bg-primary/5"
          >
            <BiPencil size={18} /> Edit
          </button>
          <button
            onClick={onDelete}
            className="border-b border-slate-200 px-5 py-2.5 w-full text-left flex items-center gap-3 hover:bg-primary/5"
          >
            <BiTrash size={18} /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableRowActions;
