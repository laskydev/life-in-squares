import React, { useState } from "react";
import "../styles/styles.scss";
import "tailwindcss/tailwind.css";
import Layout from "../components/layouts/Layout";
import { useForm } from "react-hook-form";
import { AppProps } from "next/app";
import useLocalStorage from "use-local-storage";
import { v4 as uuidv4 } from "uuid";
import { InitialUsername } from "../types";

const initialUsername: InitialUsername = {
  id: uuidv4(),
  username: "",
  birthday: "",
  sync: false,
};

function MyApp({ Component, pageProps }: AppProps) {
  const form = useForm();
  const [username, setUsername] = useLocalStorage<InitialUsername>(
    "user",
    initialUsername
  );

  return (
    <Layout>
      <h1 className="text-3xl text-center mb-6">Life in weeks</h1>
      <Component {...pageProps} form={form} user={{ username, setUsername }} />
    </Layout>
  );
}

export default MyApp;
