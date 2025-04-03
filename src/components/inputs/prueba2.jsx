<div className="w-full h-[40%] flex flex-col gap-2 justify-start px-4 py-9">
              <div className="flex items-center">
                <CheckboxWithLabel
                  label="Obra propia"
                  checked={selectedCheckboxes.obraPropia}
                  onChange={() => handleCheckboxChange("obraPropia")}
                  className="mr-2 ml-[7px]"
                />
                <CheckboxWithLabel
                  label="Obra en consignación"
                  checked={selectedCheckboxes.obraConsignacion}
                  onChange={() => handleCheckboxChange("obraConsignacion")}
                  className="mr-2 ml-[20px]"
                />
                <CheckboxWithLabel
                  label="IVA"
                  checked={selectedCheckboxes.iva}
                  onChange={() => handleCheckboxChange("iva")}
                  className="mr-2 ml-[20px]"
                />
              </div>
            </div>
            {selectedCheckboxes.obraPropia && <ObraPropia />}
            {selectedCheckboxes.obraConsignacion && <ObraConsignacion />}