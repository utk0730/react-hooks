import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const Modal = forwardRef((_, ref) => {
  const [isOpen, toggleIsOpen] = useState(false);

  const handleModalToggle = () => {
    toggleIsOpen((v) => !v);
  };
  useImperativeHandle(ref, () => {
    return {
      toggleModal: handleModalToggle,
    };
  });

  if (!isOpen) return null;
  return (
    <div
      style={{
        width: "400px",
        height: "500px",
        background: "lightpink",
        position: "absolute",
        top: "50%",
        right: "50%",
        transform: "translate(50%,-50%)",
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>This is a fancy modal</p>
        <button onClick={handleModalToggle}>
          Toggle Modal from Modal Component
        </button>
      </div>
    </div>
  );
});

export default function UseImperative() {
  const modalRef = useRef(null);
  const handleShowModal = () => {
    modalRef.current.toggleModal();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>UseImperative Example</h2>
      <button onClick={handleShowModal}>Toggle Modal from Parent</button>
      <Modal ref={modalRef} />
    </div>
  );
}
