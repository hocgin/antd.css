import {extractStyle} from '@ant-design/static-style-extract';
import fs from 'fs';
import React from "react";
import {ConfigProvider} from 'antd';
import pkg from '../node_modules/antd/package.json';
import theme from '../theme';

const outputPath = `./public/antd.${pkg.version}.min.css`;
let css = extractStyle((node) => <>
    <ConfigProvider theme={{hashed: false, token: theme}}>{node}</ConfigProvider>
</>);
fs.rmSync(outputPath);
fs.writeFileSync(outputPath, css);