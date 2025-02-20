/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function AlertModal({ isOpen, closeModal, checkStatus }) {
  const { t } = useTranslation();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 font-libre"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col justify-center items-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {checkStatus ? (
                      <FaCircleCheck className="text-success_5 text-7xl" />
                    ) : (
                      <FaCircleXmark className="text-danger_5 text-7xl" />
                    )}
                  </Dialog.Title>
                  <div className="mt-4">
                    <p className="text-xl text-gray-500">
                      {checkStatus
                        ? t("data.contact.alert_modal.text_success")
                        : t("data.contact.alert_modal.text_fail")}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-lg border border-transparent bg-primary_5 px-7 py-2 text-lg font-medium text-white hover:bg-primary_6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary_7 focus-visible:ring-offset-2 hover:-translate-y-2 hover:delay-75 hover:duration-200"
                      onClick={closeModal}
                    >
                      {t("data.contact.alert_modal.text_button")}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
