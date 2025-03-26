import React, { useState } from "react";
import Notificacion from "../dashboard/Notificacion";

const HeaderIcons = () => {
    const [drawerVisible, setDrawerVisible] = useState(false);

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <>
            <img
                src="/svg/header/notification.svg"
                alt="Notificaciones"
                onClick={showDrawer}
                className="cursor-pointer"
            />
            <Notificacion visible={drawerVisible} onClose={closeDrawer} />
        </>
    );
};

export default HeaderIcons;