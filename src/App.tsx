import { Container } from "components/Container";
import { Search } from "components/Search";
import { TheHeader } from "components/TheHeader";
import { UserCard } from "components/UserCard";
import { defaultUser } from "mock";
import { useState } from "react";
import { GithubError, GithubUser, LocalGithubUser } from "types";
import { extractLocalUser } from "utils/extractLocalUser";
import { isGithubUser } from "utils/typeGuards";

const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);

  const userFetch = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch(url);
    const user = await res.json() as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user))
      console.log(extractLocalUser(user))
    } else {
      setUser(null)
    }

  }

  return (
    <Container>
      <TheHeader />
      <Search hasErrors={!user} onSubmit={userFetch} />
      {
        user &&
        <UserCard
          {...user}
        />}
    </Container>
  );
}

export default App;
