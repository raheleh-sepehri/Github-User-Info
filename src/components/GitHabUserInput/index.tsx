import TextFields from "../../common/TextFields";
import MyButton from "../../common/MyButton";
import GitHubInfo from "../GitHubInfo";
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
      console.log("empty");

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
      setUserName("");
      setIsOpen(true);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        toast.error("The entered GitHub username does not exist.");
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div className="w-full bg-cyan-50  border-r-2 border-gray-200  flex items-center justify-center md:p-10 lg:p-20 ">
      <div className="flex h-full shadow-inner w-full px-2 flex-col items-center justify-center gap-y-5 rounded-lg border border-gray-200">
        <h1 className="font-bold text-xl md:text-2xl mb-12 text-center  ">
          Give your GitHub username
        </h1>
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
      <GitHubInfo
        userData={userData}
        repos={repos}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default GitHabUserInput;
