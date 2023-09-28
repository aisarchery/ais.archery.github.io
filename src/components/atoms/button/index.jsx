import React from "react"

const Button = ({children, to}) => {
  return (
    <a
    href={to}
    className="rounded-full bg-slate-50 px-3 py-3 text-sm font-semibold text-black text-center hover:text-white shadow-xl hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 md:text-xl m-1 basis-1/4 truncate overflow-ellipsis"
    >
        {children}
    </a>
  )
}

export default Button