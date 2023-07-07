"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container } from "@mui/material";
import HeroSection from "@/section/home/HeroSection";

export default function Home() {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
}
