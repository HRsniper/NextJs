import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

import { UserInterface } from "../../src/interfaces";
import style from "../../styles/user.module.css";

const Login = ({ user }: UserInterface) => {
  // console.log(user);

  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <div className={style.userLogin}>
        <p>Carregando...</p>
      </div>
    );
  }

  function Company(_company: string) {
    const company = _company.replace("@", "");
    return (
      <a href={`https://github.com/${company}`} target="_blank" rel="noreferrer noopener">
        🏢{company}
      </a>
    );
  }

  function Twitter(_twitter: string) {
    return (
      <a href={`https://twitter.com/${_twitter}`} target="_blank" rel="noreferrer noopener">
        🌐@{_twitter}
      </a>
    );
  }

  return (
    <div className={style.userLogin}>
      <Link href="/">Back to search</Link>

      <img alt={user.name} src={user.avatar_url} />

      <h1>{user.name}</h1>

      <strong>
        <a href={user.html_url}>{user.login}</a>
      </strong>

      {user.bio === null ? "" : <p>{user.bio}</p>}

      <p>
        <span>👥{user.followers}</span> | <span>👥{user.following}</span>
      </p>

      <p>
        <span>📚{user.public_repos}</span> | <span>📄{user.public_gists}</span>
      </p>

      {user.location === null ? "" : <p>🚩{user.location}</p>}

      {user.company === null ? "" : <p>{Company(user.company)}</p>}

      {user.blog === "" ? (
        ""
      ) : (
        <p>
          <a href={user.blog}>🌎{user.blog}</a>
        </p>
      )}

      {user.twitter_username === null ? "" : <p>{Twitter(user.twitter_username)}</p>}
    </div>
  );
};

export default Login;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { login: "HRsniper" } }],
    fallback: true,
    // fallback: false, // for next export project
  };
};

interface Params extends ParsedUrlQuery {
  login: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { login } = params as Params;

  const response = await fetch(`https://api.github.com/users/${login}`);

  const user = await response.json();

  return {
    props: {
      user,
    },
    revalidate: 10,
  };
};
