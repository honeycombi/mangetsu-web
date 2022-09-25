import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return (
    <div>
      <div className="layoutbg dark:hidden">
        <div className=" mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
      </div>
      <div className="bg-gray-800">
        <div className=" mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
      </div>
    </div>
  )
}
