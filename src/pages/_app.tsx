import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Cuidar Bem</title>
        <meta
          name="description"
          content="Cuidar Bem traz informações atualizadas e dicas confiáveis sobre diversos temas relacionados à saúde e bem-estar."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
