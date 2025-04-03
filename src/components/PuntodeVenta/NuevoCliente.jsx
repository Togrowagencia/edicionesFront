/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Drawer } from "antd";


const NuevoCliente = ({ isPopupOpen, handlePopupClose }) => {


    return (
        <div style={{ position: "relative" }}>
            <Drawer
                placement="right"
                onClose={handlePopupClose}
                open={isPopupOpen}
                width={1483}
                closable={false}
                headerStyle={{ display: "none" }}
                drawerStyle={{ borderRadius: "10px 10px 10px 10px" }}
            ></Drawer>
        </div>

    );
};
NuevoCliente.propTypes = {
    isPopupOpen: PropTypes.bool.isRequired,
    handlePopupClose: PropTypes.func.isRequired,
};

export default NuevoCliente;