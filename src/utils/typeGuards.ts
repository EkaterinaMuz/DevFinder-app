import { GithubError, GithubUser } from "types";

export const isGithubUser = (user: GithubUser | GithubError): user is GithubUser => 'id' in user;