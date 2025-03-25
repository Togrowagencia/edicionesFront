import React from "react";
import { message, Upload, ConfigProvider, theme } from "antd";

const { Dragger } = Upload;
const { useToken } = theme;

const CustomUploadIcon = () => (
  <div className="flex w-full justify-center">
  <img src="/svg/editar.svg" alt="Upload"/>
  </div>
);

const props = {
  name: "file",
  multiple: true,
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const CustomDragger = () => {
  const { token } = useToken();

  return (
    <Dragger
      {...props}
      style={{
        border: `${token.lineWidth}px dashed ${token.colorBorder}`,
        borderRadius: token.borderRadiusLG,
        backgroundColor: token.colorFillAlter,
        padding: token.paddingLG,
        transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      }}
    >
      <div
        className="ant-upload-drag-icon"
        style={{ color: token.colorPrimary }}
      >
        <CustomUploadIcon />
      </div>
      <div className="w-full flex justify-center">
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
