import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import Image from 'next/image'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function Home() {
  return (
    <LayoutWrapper>
      <div className="swapglassmorphism py-auto mx-auto max-w-sm overflow-hidden rounded py-10">
        <div className="px-6">
          <div className="mb-2 text-center text-3xl font-bold">Swap</div>
          <form className="flex flex-col">
            <label>Deposit Value:</label>
            <input type="number" required />
            <br />
            <label>Withdraw Value:</label>
            <input type="number" required />
            <br />
            <button
              type="submit"
              className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
        {/*  */}
      </div>
    </LayoutWrapper>
  )
}
