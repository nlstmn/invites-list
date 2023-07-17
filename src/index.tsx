import React from "react";
import { render } from "react-dom";
// @ts-ignore
import { init as suppress } from "log-suppress";

import "./index.css";
import { Root } from "./Root";
// @ts-ignore
suppress(console);

const rootElement = document.getElementById("root");

render(<Root />, rootElement);
