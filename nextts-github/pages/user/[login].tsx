import { GetStaticPaths, GetStaticProps } from "next";

import { UserInterface } from "../../src/interfaces";

const Login = ({ user }: UserInterface) => {
  console.log(user);
  return (
    <div>
      <img src={user.avatar_url} alt="" />
      <br />
      <strong>{user.name}</strong>
      <br />
      <span>{user.bio}</span>
    </div>
  );
};

export default Login;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { login: "HRsniper" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { login } = params;

  const response = await fetch(`https://api.github.com/users/${login}`);

  const user = await response.json();

  return {
    props: {
      user,
    },
    revalidate: 10,
  };
};
