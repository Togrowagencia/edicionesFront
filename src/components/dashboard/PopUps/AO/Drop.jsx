import React, { useState } from "react";
import { message, Upload, ConfigProvider, theme } from "antd";

const { Dragger } = Upload;
const { useToken } = theme;

const CustomDragger = () => {
  const { token } = useToken();
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    setFileList(newFileList);

    if (info.file.status === "done") {
      message.success(`${info.file.name} se cargó correctamente.`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} falló al cargar.`);
    }

    // Si hay una imagen válida, actualizar la vista previa
    if (newFileList.length > 0) {
      const lastFile = newFileList[newFileList.length - 1];
      if (lastFile.originFileObj) {
        const reader = new FileReader();
        reader.onload = () => setPreviewImage(reader.result);
        reader.readAsDataURL(lastFile.originFileObj);
      }
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <Dragger
      name="file"
      multiple={true} // Permite varias a la vez
      fileList={fileList}
      onChange={handleChange}
      beforeUpload={() => false} // No subir automáticamente
      style={{
        border: `${token.lineWidth}px dashed ${token.colorBorder}`,
        borderRadius: token.borderRadiusLG,
        backgroundColor: token.colorFillAlter,
        padding: token.paddingLG,
        transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
        position: "relative",
        overflow: "hidden",
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
            borderRadius: token.borderRadiusLG,
          }}
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div
            className="ant-upload-drag-icon"
            style={{ color: token.colorPrimary }}
          >
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

const Drop = () => (
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
    <CustomDragger />
  </ConfigProvider>
);

export default Drop;
