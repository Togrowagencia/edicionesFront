import { Drawer } from "antd";
import PropTypes from "prop-types";

const Detalle = ({ isOpen, OnClose }) => {
    return (
        <Drawer
            rootClassName="drawer-detalle2"
            placement="bottom"
            onClose={OnClose}
            open={isOpen}
            closable={false} // Desactiva el botón de cierre predeterminado
            headerStyle={{ display: "none" }} // Oculta el header del Drawer
            drawerStyle={{
                borderRadius: "10px 10px 10px 10px",
                height: "100%",
            }}
        >

            {/* Botón de cierre personalizado */}
            <div
                style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    cursor: "pointer",
                }}
                onClick={OnClose}
            >
                <img
                    src="/public/svg/popup-ao/cerrar (2).svg"
                    alt="Cerrar"
                    className="w-6 h-6 mt-[10%]"
                />
            </div>

            <div className="flex items-center gap-2">
                <p className="mb-4 h3 verde-corporativo py-8 px-4">Trasladar obras</p>
                <div className="flex flex-col">
                    <p>Cliente</p>
                    <p>Juan</p>
                </div>
            </div>

        </Drawer>

    );
};

Detalle.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    OnClose: PropTypes.func.isRequired,
};

export default Detalle;
