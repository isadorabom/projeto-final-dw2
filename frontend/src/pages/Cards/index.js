import React, { useState, useEffect } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";

import "./cards.css";
import AppArea from "../../components/AppArea";
import api from "../../services/api";

export default function Cards() {
	return <AppArea id="cards"></AppArea>;
}
