import React, { ReactNode, useId } from "react";
import { cx } from "../../config/constants";

type OverlayModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};
const OverlayModal = ({ onClose, open, children }: OverlayModalProps) => {
  const id = useId();
  const overlayClickHandler = (e: any) => {
    if (e.target.id === "overlayModal" + id) {
      onClose();
    }
  };

  return (
    <div
      onClick={overlayClickHandler}
      id={"overlayModal" + id}
      className={cx(
        "fixed inset-0 bg-black/50 z-[99999] duration-100",
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none delay-[250ms]",
      )}
    >
      <div
        className={cx(
          "w-[80%] sm:w-[400px] ml-auto h-full bg-white duration-300",
          open ? "translate-x-0 delay-200" : "translate-x-full",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default OverlayModal;
