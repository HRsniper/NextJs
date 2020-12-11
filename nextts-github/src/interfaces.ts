export interface User {
  login: number;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: UserFollowersInterface[];
  following_url: UserFollowersInterface[];
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface UserInterface {
  user: User;
}

export interface UserFollowersInterface {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: UserFollowersInterface[];
  following_url: UserFollowersInterface[];
  gists_url: string;
  starred_url: UserReposInterface[];
  subscriptions_url: UserReposInterface[];
  organizations_url: [];
  repos_url: UserReposInterface[];
  events_url: [];
  received_events_url: [];
}

export interface UserReposInterface {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: UserFollowersInterface;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  languages_url: string;
  contributors_url: UserFollowersInterface[];
  subscribers_url: UserFollowersInterface[];
  created_at: string;
  updated_at: string;
  homepage: string;
  size: string;
  license: string;
}
