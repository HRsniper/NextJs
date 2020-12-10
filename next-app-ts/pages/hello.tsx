import Link from "next/link";
import Layout from "../components/Layout";

const hello = (): JSX.Element => {
  return (
    <Layout title="Hello Page">
      <h1>hello</h1>
      <p>This is the hello page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default hello;
