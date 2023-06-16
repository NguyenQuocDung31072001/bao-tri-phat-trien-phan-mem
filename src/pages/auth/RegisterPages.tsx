import React from "react"
import InputWithOutline from "../../components/input/InputWithOutline"
import { Link } from "react-router-dom"
import { PathRouter } from "../../constant/path.router"

export default function RegisterPages() {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setPassword] =
    React.useState<string>("")
  const [confirmPassword, setConfirmPassword] =
    React.useState("")

  return (
    <div className="flex w-full items-center justify-center bg-gray-100">
      <div className="my-16 flex w-[50%] flex-col items-center justify-center rounded-[2px] bg-white p-8 shadow-sm">
        <div className=" w-full">
          <p className="font-serif text-[24px] font-bold text-primaryRed">
            Đăng ký
          </p>
          <div className="mb-4 h-1 w-[50%] bg-primaryYellow"></div>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <InputWithOutline
            type="text"
            name="Họ tên"
            value={name}
            setValue={setName}
          />
          <div className="w-full py-2" />
          <InputWithOutline
            type="text"
            name="Email"
            value={email}
            setValue={setEmail}
          />
          <div className="w-full py-2" />
          <InputWithOutline
            type="password"
            name="Mật khẩu"
            value={password}
            setValue={setPassword}
          />
          <div className="w-full py-2" />
          <InputWithOutline
            type="password"
            name="Nhập lại mật khẩu"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
          <div className="w-full py-2" />
          <button className="mb-4 w-full rounded-[10px] bg-primaryRed/90 py-2 text-white duration-300 hover:bg-primaryRed">
            Đăng ký
          </button>
          <span className="font-normal">
            Bạn đã có tài khoản?
            <Link to={PathRouter.LOGIN}>
              <span className="text-primaryRed">
                Đăng nhập ngay
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}