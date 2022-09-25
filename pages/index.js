import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="home">
      <PageSEO title={`Index - ${siteMetadata.author}`} description={siteMetadata.description} />

      <div className="flex h-screen text-center text-gray-200">
        <div className="m-auto">
          <div className="pb-[-10px]">
            <Image src="/static/images/logo.png" width="200" height="200" />
          </div>

          <h1 className="text-8xl">
            <p className="title pb-2">Mangetsu</p>
          </h1>
          <p className="pt-4 text-3xl">A transaction protocol for cross chain messages</p>
          <br />
          <br />
          <div className="text-3xl">
            <br />

            <div className="mt-[-10px]">
              {/*  */}
              <button className="mx-4 rounded border border-white bg-transparent py-2 px-4 hover:border-transparent hover:bg-orange-600">
                <Link href="/swap">
                  <div className="inline cursor-pointer text-orange-300">Swap</div>
                </Link>
              </button>
              {/*  */}
              <button className="mx-4 rounded border border-white bg-transparent py-2 px-4 hover:border-transparent hover:bg-orange-600">
                <Link href="/blog">
                  <div className="inline cursor-pointer text-orange-300">Blog</div>
                </Link>
              </button>
              {/*  */}
              <button className="mx-4 rounded border border-white bg-transparent py-2 px-4 hover:border-transparent hover:bg-orange-600">
                <a href="https://github.com/Mangetsu-Team/Mangetsu">
                  <div className="inline cursor-pointer text-orange-300">Code</div>
                </a>
              </button>

              {/* <div className="mt-[-10px]">
              <button className="mx-4 rounded border border-white bg-transparent py-2 px-4 hover:border-transparent hover:bg-orange-600">
                <a href="/swap">
                  <div className="inline cursor-pointer text-orange-300">Swap</div>
                </a>
              </button>

              <button className="mx-4 rounded border border-white bg-transparent py-2 px-4 hover:border-transparent hover:bg-orange-600">
                <a href="/blog">
                  <div className="inline cursor-pointer text-orange-300">Blog</div>
                </a>
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
