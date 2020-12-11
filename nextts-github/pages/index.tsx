import { GetStaticProps } from "next";

import { UserInterface } from "../src/interfaces";

const Home = ({ user }: UserInterface) => {
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

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`https://api.github.com/users/HRsniper`);

  const user = await response.json();

  return {
    props: {
      user,
    },
    revalidate: 10,
  };
};
