'use client'

import senku from '@/app/senku.json'
import Lottie from 'lottie-react'

export default function Home() {
  return (
    <main className="w-full p-4 h-screen flex flex-col justify-center items-center  bg-teal-500">
      <div className="w-96">
        <Lottie animationData={senku} />
      </div>
      <h1 className="text-6xl text-center font-bold">Berotak Senku 🤓</h1>
    </main>
  )
}
