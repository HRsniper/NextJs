import Link from "next/link";
import { FormEvent, useState } from "react";

import style from "../styles/index.module.css";

const Home = () => {
  const [user, setUser] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <Link href={`/user/${user}`}>Search</Link>
    </form>
  );
};

export default Home;
