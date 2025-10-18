import Counter from '@/components/Counter'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center w-full text-gray-800">
          Simple Counter App
        </h1>
      </div>
      <div className="mt-16">
        <Counter />
      </div>
    </main>
  )
}