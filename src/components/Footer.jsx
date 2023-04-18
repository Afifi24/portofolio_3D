import React from "react"
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai"
function Footer() {
  return (
    <div name="footer" className="w-full  text-whte justify-center p-4">
      <hr />
      <ul className="flex justify-center text-center text-4xl mt-3 ">
        <li>
          <AiFillGithub
            onClick={() =>
              window.open("https://github.com/Afifi24", "_blank")
            }
            className='cursor-pointer'

          />
        </li>

        <li>
          <AiOutlineLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/bra-afifi-3108a0258/",
                "_blank"
              )
            }
            className='cursor-pointer'
          />
        </li>
        <p className="text-lg mt-1 ">Made by Me Afifi Brahim</p>
      </ul>
    </div>
  )
}

export default Footer
