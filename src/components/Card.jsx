import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SiteWideModal from "./SiteWideModal";
import { resetInitialState } from "../redux/features/game";

const Card = ({ img, value }) => {
  const dispatch = useDispatch();
  const random = useSelector((state) => state.game.random);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (random.length === 25) setShow(true);
  };

  const openModal = () => {
    setModalContent(
      <div className="">
        {value === 1 ? (
          <>
            <h1 className="text-2xl mb-3 text-center">Congratulations</h1>
            <p className="!font-medium mb-2 text-center">You Won!!</p>
          </>
        ) : (
          <>
            <h1 className="text-2xl mb-3 text-center">Sorry</h1>
            <p className="!font-medium mb-2 text-center">You Lost!!</p>
          </>
        )}
        <button
          onClick={() => {
            dispatch(resetInitialState());
            setIsModalOpen(false);
          }}
          className="w-full text-center py-2.5 bg-linear-to-r from-[#24ee89] to-[#9fe871] !text-black font-bold rounded-lg mb-2 cursor-pointer"
        >
          New Match
        </button>
      </div>
    );
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        onClick={() => {
          handleClick();
          openModal();
        }}
        className={`relative cursor-pointer p-1 transition-all ease-linear text-center rounded-lg ${
          show
            ? value === 1
              ? "bg-[#7d40cf] "
              : "bg-[#1e2121] "
            : "dark:bg-[#444C4D] dark:hover:bg-[#545F60] bg-[#E0E5E6] hover:bg-[#4a5354]"
        }`}
      >
        {show ? (
          <>
            <div className="pb-[100%] relative">
              <div className="absolute w-full h-full flex items-center justify-center">
                <img src={img} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="pb-[100%]"></div>
        )}
      </div>
      <SiteWideModal
        buttonText="Trigger Modal"
        className="hidden modal-trigger-button"
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
      >
        {modalContent}
      </SiteWideModal>
    </>
  );
};

export default Card;
