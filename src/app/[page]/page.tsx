import { NextPageBtn } from './button'

export function generateStaticParams() {
  return new Array(10).fill(0).map((_, i) => {
    return {
      page: `${i + 1}`,
    }
  })
}
export default () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
      <div className="m-auto h-12 w-12 rounded-md bg-[oklch(var(--a))]"></div>

      <NextPageBtn />
    </div>
  )
}
