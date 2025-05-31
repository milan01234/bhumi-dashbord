import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FileUploadCard = ({ title, multiple = true, files = [],setFiles = () => {}}) => {
  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    preventDefaults(e);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(prev => multiple ? [...prev, ...droppedFiles] : droppedFiles.slice(0, 1));
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => multiple ? [...prev, ...selectedFiles] : selectedFiles .slice(0, 1));
  };

  const handleRemoveFile = (indexToRemove) => {
    setFiles(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="card p-4 shadow-sm w-100" style={{ minWidth: '300px' }}>
      <h5 className="card-title mb-3">{title}</h5>

      <div
        className="border border-2 rounded p-4 text-center bg-light"
        style={{ borderStyle: 'dashed', cursor: 'pointer' }}
        onDrop={handleDrop}
        onDragOver={preventDefaults}
        onDragEnter={preventDefaults}
        onClick={() => document.getElementById(title).click()}
      >
        <p className="mb-0 text-muted">
          Drag & drop file{multiple ? 's' : ''} here or <strong>click to browse</strong>
        </p>
        <input
          type="file"
          id={title}
          multiple={multiple}
          onChange={handleFileInput}
          style={{ display: 'none' }}
          accept="application/json"
        />
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <h6>Uploaded File{files.length > 1 ? 's' : ''}:</h6>
          <div
            className="border rounded"
            style={{ maxHeight: '200px', overflowY: 'auto' }}
          >
            <ul className="list-group list-group-flush">
              {files.map((file, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={index}
                >
                  <span className="text-truncate" style={{ maxWidth: '70%' }}>
                    {file.name}
                  </span>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleRemoveFile(index)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadCard;
