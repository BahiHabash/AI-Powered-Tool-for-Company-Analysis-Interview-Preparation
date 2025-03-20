import React, { useRef, useState } from "react";
import "./drop-file-input.css";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      const updatedList = [...fileList, newFile];
      setFileList(updatedList);
      props.onFileChange(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input hover:opacity-60 relative w-[800px] h-[400px] border-4 rounded-[1.25rem] flex items-center justify-center border-gray-700 bg-gray-800"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label text-center flex flex-col items-center font-semibold p-2.5">
          <img src={"/assets/upload.png"} alt="" className="w-28" />
          <p>Drag & Drop your files here</p>
        </div>
        <input
          className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
          type="file"
          value=""
          onChange={onFileDrop}
        />
      </div>
    </>
  );
};

export default DropFileInput;
