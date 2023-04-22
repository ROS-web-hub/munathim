import React from 'react';
import { Radio, Select, Space } from 'antd';
import { useState } from 'react';
const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const handleChange = (value) => {
    console.log(`Selected: ${value}`);
};
const App = () => {
    const [size, setSize] = useState('middle');
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };
    return (
        <>
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
            >
                <Select
                    size={size}
                    defaultValue="a1"
                    onChange={handleChange}
                    style={{
                        width: 200,
                    }}
                    options={options}
                />
            </Space>
        </>
    );
};
export default App;