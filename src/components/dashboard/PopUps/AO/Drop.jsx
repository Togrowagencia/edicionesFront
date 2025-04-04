import React, { useState, useEffect, useRef } from "react";
import { Button, Divider, Input, Select, Space, message, Upload, ConfigProvider, theme } from "antd";
import PropTypes from "prop-types";

const { Dragger } = Upload;
const { useToken } = theme;

const CustomDragger = ({ initialImageUrl }) => {
  const { token } = useToken();
  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const inputRef = useRef(null);

  // Si se pasa una URL inicial y no hay archivos cargados, mostrarla
  useEffect(() => {
    if (!fileList.length && initialImageUrl) {
      setPreviewImage(initialImageUrl);
    }
  }, [initialImageUrl, fileList]);

  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    setFileList(newFileList);

    if (info.file.status === "done") {
      message.success(`${info.file.name} se cargó correctamente.`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} falló al cargar.`);
    }

    // Si se sube un archivo, generar preview con FileReader
    if (newFileList.length > 0) {
      const lastFile = newFileList[newFileList.length - 1];
      if (lastFile.originFileObj) {
        const reader = new FileReader();
        reader.onload = () => setPreviewImage(reader.result);
        reader.readAsDataURL(lastFile.originFileObj);
      }
    } else {
      // Si no hay archivos, y existe una URL inicial, la mostramos
      setPreviewImage(initialImageUrl || null);
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

CustomDragger.propTypes = {
  initialImageUrl: PropTypes.string, // URL inicial para mostrar si no se carga un archivo
};

const Drop = ({ initialImageUrl }) => (
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
    <CustomDragger initialImageUrl={initialImageUrl} />
  </ConfigProvider>
);

Drop.propTypes = {
  initialImageUrl: PropTypes.string,
};

export default Drop;
