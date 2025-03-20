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
      {fileList.length > 0 ? (
        <div className="drop-file-preview mt-8">
          <p className="drop-file-preview__title mb-5 font-medium">
            Ready to upload
          </p>
          {fileList.map((item, index) => (
            <div
              key={index}
              className="drop-file-preview__item relative flex mb-2.5 p-4 rounded-[20px] bg-gray-800"
            >
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240307210250/file-blank-solid-240.png"
                alt=""
                className="w-12 mr-5"
              />
              <div className="drop-file-preview__item__info flex flex-col justify-between">
                <p className="font-medium">{item.name}</p>
                <p className="font-medium">{item.size}B</p>
              </div>
              <span
                className="drop-file-preview__item__del  w-10 h-10 rounded-full flex items-center justify-center"
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default DropFileInput;
