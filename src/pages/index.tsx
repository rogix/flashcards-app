import type { NextPage } from "next";
import { BsPlusCircleDotted } from "react-icons/bs";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Home: NextPage = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <main className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 h-screen">
      <button
        type="button"
        onClick={openModal}
        className="flex transform items-center rounded-3xl bg-black bg-opacity-20 px-6 py-7 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-30 focus:outline-none active:bg-opacity-40"
      >
        <BsPlusCircleDotted size="3rem" color="rgb(50 117 242 / 98%)" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
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
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#194c9e] p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-300 mb-4 text-center "
                  >
                    New Topic
                  </Dialog.Title>
                  <form>
                    <input
                      type="text"
                      placeholder="Title"
                      className="bg-[#164796] rounded-3xl w-full h-10 mb-4 p-4 placeholder:text-white focus:outline-none focus-visible:ring text-white"
                    />

                    <textarea
                      rows={6}
                      name="textarea"
                      placeholder="Description (optional)"
                      className="bg-[#164796] rounded-3xl w-full p-4 placeholder:text-white focus:outline-none focus-visible:ring text-white"
                    />

                    <div className="flex justify-between mt-4 mx-2">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-teal-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
};

export default Home;
