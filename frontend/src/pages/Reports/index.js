import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

import "./reports.css";
import AppArea from "../../components/AppArea";
import api from "../../services/api";

export default function Reports() {
	return <AppArea id="reports"></AppArea>;
}
