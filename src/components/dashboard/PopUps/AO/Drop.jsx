import React, { useState, useEffect, useRef } from "react";
import { message, Upload, ConfigProvider, theme } from "antd";
import PropTypes from "prop-types";

const { Dragger } = Upload;
const { useToken } = theme;

const CustomDragger = ({ initialImageUrl, onFileChange }) => {
  const { token } = useToken();
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    setFileList([]);
    setPreviewImage(initialImageUrl || null);
  }, [initialImageUrl]);

  const handleChange = (info) => {
    const newFileList = [...info.fileList];
    setFileList(newFileList);

    if (newFileList.length > 0) {
      const lastFile = newFileList[newFileList.length - 1];
      if (lastFile.originFileObj) {
        const reader = new FileReader();
        reader.onload = () => setPreviewImage(reader.result);
        reader.readAsDataURL(lastFile.originFileObj);
        onFileChange && onFileChange(lastFile.originFileObj);
      }
    } else {
      setPreviewImage(initialImageUrl || null);
      onFileChange && onFileChange(null);
    }

    if (info.file.status === "done") {
      message.success(`${info.file.name} se cargó correctamente.`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} falló al cargar.`);
    }
  };

  return (
    <Dragger
      name="file"
      multiple
      fileList={fileList}
      onChange={handleChange}
      beforeUpload={() => false}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: token.borderRadiusLG,
      }}
    >
      {previewImage ? (
        <img
          src={previewImage}
          alt="Preview"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: token.borderRadiusLG,
          }}
        />
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="ant-upload-drag-icon" style={{ color: token.colorPrimary }}>
            <img src="/svg/popup-ao/drag.svg" alt="Upload" />
          </div>
          <p
            className="ant-upload-text w-[50%] text-center"
            style={{
              color: token.colorTextHeading,
              fontSize: token.fontSizeLG,
              marginBottom: token.marginXS,
            }}
          >
            Agregar Portada de la obra
          </p>
        </div>
      )}
    </Dragger>
  );
};

CustomDragger.propTypes = {
  initialImageUrl: PropTypes.string,
  onFileChange: PropTypes.func,
};

const Drop = ({ initialImageUrl, onFileChange }) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#5FB868",
        colorBorder: "#222",
        colorTextHeading: "#222",
        borderRadiusLG: 8,
        fontSize: 14,
        fontSizeLG: 16,
        fontSizeHeading3: 104,
        lineWidth: 3,
        colorFillAlter: "#EEE",
        paddingLG: 32,
      },
    }}
  >
    <CustomDragger initialImageUrl={initialImageUrl} onFileChange={onFileChange} />
  </ConfigProvider>
);

Drop.propTypes = {
  initialImageUrl: PropTypes.string,
  onFileChange: PropTypes.func,
};

export default Drop;
