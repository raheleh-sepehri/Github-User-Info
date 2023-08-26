import { TextFields, MyButton, GitHabInfo } from "..";
import { useState } from "react";
import axios from "axios";
import { UserData, RepoData } from "../../../types/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GitHabUserInput = ({}) => {
  const [userName, setUserName] = useState<string>("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchData = async () => {
    if (userName === "") {
      toast.error("Please enter a GitHub username.");
      return;
    }

    try {
      const userResponse = await axios.get<UserData>(
        `https://api.github.com/users/${userName}`
      );

      setUserData(userResponse.data);

      const reposResponse = await axios.get<RepoData[]>(
        userResponse.data.repos_url
      );
      setRepos(reposResponse.data);

      setUserName(""); // Clear input after successful fetch
      setIsOpen(true);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        toast.error("The entered GitHub username does not exist.");
      } else {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="left__Side">
      <div className="github__user">
        <h1 className="github__user__text">Give your GitHub username</h1>
        <TextFields
          state={userName}
          changeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUserName(e.target.value);
          }}
        />
        <MyButton
          buttonClick={fetchData}
          title="OK"
          bgColor="#6366f1"
          hoverBg="#4f46e5"
        />
      </div>
      <GitHabInfo
        userData={userData}
        repos={repos}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default GitHabUserInput;
