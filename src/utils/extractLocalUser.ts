import { GithubUser, LocalGithubUser } from "types";

export const extractLocalUser = (user: GithubUser): LocalGithubUser => ({
    login: user.login,
    id: user.id,
    avatar: user.avatar_url,
    name: user.name,
    company: user.company,
    twitter: user.twitter_username,
    location: user.location,
    blog: user.blog,
    bio: user.bio,
    repos: user.public_repos,
    followers: user.followers,
    following: user.following,
    created: user.created_at

})