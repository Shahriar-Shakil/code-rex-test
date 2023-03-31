import Layout from "@/Components/Layout/Layout";
import UserPage from "@/Components/Page/UserPage";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <Layout>
      <UserPage />
    </Layout>
  );
}
