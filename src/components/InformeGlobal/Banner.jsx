
function Banner() {

    return (
        <div className="w-[100%] h-[100%] bg-cover bg-[#222] relative flex items-center bg-[url('/images/banneregresos.png')] bg-center rounded-[24px] px-8 py-12 my-4">
            <div className="relative text-left">
                <p className="h2 blanco">Informe global de ventas</p>
                <div className="flex gap-1">
                    <img src="/svg/ingresos.svg" alt="" />
                    <p className="blanco h3">Ingresos del mes:</p>
                </div>
            </div>
        </div>
    );
}

export default Banner;
