import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <main style={{padding: "40px", textAlign: "center"}}>

        <img
          src="/img/lakshmi.webp"
          alt="Lakshmi"
          style={{
            width: "160px",
            borderRadius: "50%",
            marginBottom: "20px"
          }}
        />

        <h1>Hi, I'm Lakshmi</h1>
        <p>
          Technical Writer specializing in product documentation,
          user guides, and platform documentation.
        </p>

      </main>
    </Layout>
  );
}
