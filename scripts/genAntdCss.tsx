import {extractStyle} from '@ant-design/static-style-extract';
// @ts-ignore
import fs from 'fs';
import React from "react";
import {ConfigProvider} from 'antd';

const outputPath = './public/antd.min.css';

const css = extractStyle(node => <>
    <ConfigProvider theme={{hashed: false}}>{node}</ConfigProvider>
</>);

fs.writeFileSync(outputPath, css);