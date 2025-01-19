import ReactDom from "react-dom";

const Modal = ({ children, handleCloseModal }) => {
  return ReactDom.createPortal(
    <div className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div
        className=" absolute inset-0 "
        onClick={handleCloseModal} // Close modal when clicking the overlay
      />
      <div className=" text-white rounded-lg shadow-lg p-8 relative z-10 modal-background ">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={handleCloseModal} // Close modal when clicking the close button
        >
          &times; {/* Close button */}
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
