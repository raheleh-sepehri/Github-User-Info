export interface UserData {
  name: string;
  public_repos: number;
  repos_url: string;
  login: string;
}

export interface RepoData {
  id: number;
  name: string;
  description: string;
}
