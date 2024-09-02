"use client";
import config from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";
import React from "react";

const AdminPage = () => {
  return <NextStudio config={config}></NextStudio>;
};

export default AdminPage;
