import React from "react"
import ReactDom from "react-dom"
import { motion } from "framer-motion"

interface IPropsModalFade {
  open: boolean
  setOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >
}
export default function ModalFade({
  open,
  setOpen,
}: IPropsModalFade) {
  const root = document.getElementById(
    "root",
  ) as HTMLElement

  if (!open) return <></>

  const CancelIcon = (
    <div className="flex h-[20px] justify-end">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6 cursor-pointer rounded-[2px] duration-100 hover:border-2 hover:border-pink-300/80"
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  )

  const renderHeader = (
    <div className=" flex flex-col items-center justify-center">
      <i className="fas fa-search mx-1 cursor-pointer rounded-[50%] bg-primaryYellow p-3 text-[16px] font-bold text-primaryRed"></i>
      <p className="mt-2 font-serif text-[24px] font-bold text-primaryRed">
        TÌM KIẾM
      </p>
    </div>
  )
  const renderContent = (
    <div className=" flex h-[100px] w-[800px] items-center overflow-hidden overflow-y-scroll overscroll-contain">
      <input className="w-full rounded-tl-[10px] rounded-bl-[10px] border-[1px] border-gray-400 px-4 py-2 text-[16px] text-gray-600  focus:border-4 focus:border-red-300 focus:outline-none" />
      <i className="fas fa-search cursor-pointer rounded-tr-[10px] rounded-br-[10px] border-[1px] border-gray-400 p-3 text-[16px] font-bold text-gray-500 duration-300 hover:bg-gray-400 hover:text-white"></i>
    </div>
  )
  const renderFooter = (
    <div className="flex justify-center"></div>
  )

  return ReactDom.createPortal(
    <div
      onScroll={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <div
        className="fixed top-0 z-40 flex h-[100vh] w-[100vw] items-center justify-center bg-black/40"
        onClick={() => setOpen(!open)}
      ></div>
      <motion.div
        className="fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] rounded-[2px] bg-white bg-pattern bg-contain py-4 px-2"
        initial={{ y: -300, x: "-50%" }}
        animate={{ y: "-50%" }}
        exit={{ y: "-50%", x: "-50%" }}
      >
        {CancelIcon}
        {renderHeader}
        {renderContent}
        {renderFooter}
      </motion.div>
    </div>,
    root,
  )
}
