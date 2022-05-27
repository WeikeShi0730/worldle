const Modal = ({ message }: { message: string }) => {
  return (
    <div className="fixed z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
      <div className="flex items-center justify-center z-10 bg-slate-200 p-20 rounded backdrop-blur-md bg-opacity-20">
        {message}
      </div>
    </div>
  );
};

export default Modal;
