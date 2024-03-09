'use client'

import { useParams, useRouter } from 'next/navigation'

export const NextPageBtn = () => {
  const router = useRouter()
  const { page } = useParams()
  return (
    <>
      <button
        className="m-auto inline-block p-2 mt-4 rounded border border-gray-500 text-xs opacity-90"
        onClick={() => {
          router.push(`/${parseInt(page as string) + 1}`)
        }}
      >
        To Next Page
      </button>

      <p className="mt-4 text-sm opacity-70">Current Page: {page}</p>
    </>
  )
}
