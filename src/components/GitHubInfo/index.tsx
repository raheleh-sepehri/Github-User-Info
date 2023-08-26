import React, { Fragment } from "react";
import { UserData, RepoData } from "../../../types/index";
import { Dialog, Transition } from "@headlessui/react";
import closeIcon from "../../assets/icons8-close.svg";
import MyButton from "../../common/MyButton";

interface PropsType {
  userData: UserData | null;
  repos: RepoData[];
  isOpen: boolean;

  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const index = ({ userData, isOpen, repos, setIsOpen }: PropsType) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {userData && (
        <Transition appear={isOpen} as={Fragment} show={isOpen && true}>
          <Dialog as="div" className="z-10 relative" onClose={handleClose}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-200"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-200 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative flex flex-col gap-5 transition-all w-full p-6 max-w-lg max-h-[90vh] rounded-2xl transform bg-white overflow-y-auto text-left shadow-xl ">
                    <button
                      className="absolute top-2 right-2 rounded-full z-10 bg-white p-1"
                      type="button"
                      onClick={handleClose}
                    >
                      <img src={closeIcon} alt="close" width={20} height={20} />
                    </button>
                    <div className="flex-1 flex flex-col gap-3">
                      <h2 className="capitalize font-semibold text-center text-xl px-4">
                        {userData.name}
                      </h2>
                      <hr />
                      <div className="flex flex-col py-2">
                        <p className="py-2">
                          <span className="text-sky-600 mt-5 font-bold ">
                            Number of Repositories:
                          </span>{" "}
                          <span>{userData.public_repos}</span>
                        </p>
                        <hr />
                        <h3 className="text-sky-600 mt-5 font-bold">
                          Repositories:
                        </h3>
                        <ul>
                          {repos.map((repo) => (
                            <li
                              className="py-4 border-b border-gray-200 leading-8"
                              key={repo.id}
                            >
                              <strong>{repo.name}</strong>:{" "}
                              {repo.description
                                ? repo.description
                                : "There is no description"}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="w-full text-center">
                        <MyButton
                          title="close"
                          bgColor="#e11d48"
                          hoverBg="#9f1239"
                          buttonClick={handleClose}
                        />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default index;
