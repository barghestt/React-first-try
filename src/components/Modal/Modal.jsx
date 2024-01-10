import { createPortal } from "react-dom";
import { cratePortal } from "react-dom";
import { useRef, useEffect } from "react";

export default function Modal({ children, open }) {
  // return  <dialog open={open}>{children}</dialog>
  const dialog = useRef();

  useEffect(()=>{
if (open) {
    dialog.current.showModal();
  } else {
    dialog.current.close();
  }
  },[open])

  

  return createPortal(
    <dialog ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
