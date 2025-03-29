import React, { useState } from "react";
import { Select } from 'antd';
import { DownOutlined } from "@ant-design/icons";

const initialNames = [
  "Viivi Kalm",
  "Emma Davies",
  "Tim Steward",
  "Madison Walker",
  "Vilma Heino",
];

const DemoAutoCompleteWithAdd = () => { 

  const handleChange = (data) => {
    setValue(data);
  };
  return (
    <div style={{ width: 600 }}>
        <Select
            showSearch
            mode="multiple"
            optionFilterProp="label"
            style={{ width: '100%' }}
            placeholder="Ediciones"
            onChange={handleChange}
            options={[
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                },
                {
                  value: 'tom',
                  label: 'Tom',
                },
              ]}
        />
    </div>
  );
};

export default DemoAutoCompleteWithAdd;
