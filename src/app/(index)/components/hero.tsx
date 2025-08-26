"use client"

import { motion, MotionValue, useMotionValue, useTransform } from "motion/react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Image from "next/image"
import Link from "next/link"
import ChairData from "@/data/chairs.json"
import { useState, useEffect } from "react"

export default function Hero() {
    const [mounted, setMounted] = useState(false)
    // ウィンドウサイズを取得
    const windowSize = useWindowSize()
    
    // クライアントサイドマウント時に設定
    useEffect(() => {
        setMounted(true)
    }, [])
    
    // 動的なデバイスサイズ設定
    const device = {
        width: windowSize.width,
        height: windowSize.height,
    }

    // 初期位置
    const x = useMotionValue(-200)
    const y = useMotionValue(-250)

    // Transform mapping functions (動的に計算)
    const createScreenRange = (axis: keyof typeof device) => [
        -60,
        80,
        device[axis] - (icon.size + icon.margin) / 2 - 80,
        device[axis] - (icon.size + icon.margin) / 2 + 60,
    ]

    const scaleRange = [0, 1, 1, 0]
    const translateRange = [50, 0, 0, -50]
    const xRange = createScreenRange("width")
    const yRange = createScreenRange("height")

    // サーバーサイドレンダリング時の簡単なフォールバック
    if (!mounted) {
        return (
            <div className="device w-screen h-screen relative overflow-hidden flex items-center justify-center">
                <div className="text-center">
                    <div className="text-4xl font-bold text-gray-800 mb-4">Chair Hub</div>
                    <div className="text-lg text-gray-600">Loading...</div>
                </div>
            </div>
        )
    }

    return (
        <div className="device w-screen h-screen relative cursor-grab active:cursor-grabbing overflow-hidden user-select-none touch-none">
            <motion.div
                drag
                // 拖曳邊界設定
                dragConstraints={{
                    left: -200,
                    right: 20,
                    top: -500,
                    bottom: 50,
                }}
                style={{
                    width: device.width*2,
                    height: device.height*2,
                    x,
                    y,
                    background: "transparent",
                    willChange: "transform",
                }}
            >
                {grid.map((rows, rowIndex) =>
                    rows.map((colIndex: number) => (
                        <Item
                            key={`${rowIndex}-${colIndex}`}
                            row={rowIndex}
                            col={colIndex}
                            planeX={x}
                            planeY={y}
                            xRange={xRange}
                            yRange={yRange}
                            scaleRange={scaleRange}
                            translateRange={translateRange}
                        />
                    ))
                )}
            </motion.div>
        </div>
    )
}

function Item({ row, col, planeX, planeY, xRange, yRange, scaleRange, translateRange }: ItemProps) {
    const xOffset =
        col * (icon.size + icon.margin) +
        (row % 2) * ((icon.size + icon.margin) / 2)
    const yOffset = row * icon.size

    const screenOffsetX = useTransform(() => planeX.get() + xOffset + 20)
    const screenOffsetY = useTransform(() => planeY.get() + yOffset + 20)
    const x = useTransform(screenOffsetX, xRange, translateRange)
    const y = useTransform(screenOffsetY, yRange, translateRange)
    const xScale = useTransform(screenOffsetX, xRange, scaleRange)
    const yScale = useTransform(screenOffsetY, yRange, scaleRange)
    const scale = useTransform(() => Math.min(xScale.get(), yScale.get()))

    return (
        <motion.div
            className="absolute flex justify-center items-center rounded-full bg-white contain-strict overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all"
            style={{
                left: `${xOffset}px`,
                top: `${yOffset}px`,
                x,
                y,
                scale,
                width: `${icon.size}px`,
                height: `${icon.size}px`,
                willChange: "transform",
            }}
        >
            <TooltipProvider>
              <Tooltip delayDuration={600}>
                <TooltipTrigger asChild>
                  <Link href={`/chairs/${ChairData[(row * 12 + col) % ChairData.length].slug}`} className="w-full h-full flex justify-center items-center">
                    <Image src={`/chairs/${ChairData[(row * 12 + col) % ChairData.length].image}`} alt={ChairData[(row * 12 + col) % ChairData.length].name_en} width={100} height={100} className="object-cover select-none touch-none" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{ChairData[(row * 12 + col) % ChairData.length].name_en}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
        </motion.div>
    )
}

// Fill a grid of numbers to represent each app icon
const grid = new Array(12).fill([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

interface ItemProps {
    row: number
    col: number
    planeX: MotionValue<number>
    planeY: MotionValue<number>
    xRange: number[]
    yRange: number[]
    scaleRange: number[]
    translateRange: number[]
}

/**
 * ==============   Settings   ================
 */

const icon = {
    margin: 40,
    size: 120,
}


// ウィンドウサイズを監視するカスタムフック
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1920,
        height: typeof window !== 'undefined' ? window.innerHeight : 1080,
    })

    useEffect(() => {
        // ウィンドウサイズ変更のハンドラー
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        // リサイズイベントリスナーを追加
        window.addEventListener('resize', handleResize)
        
        // コンポーネントマウント時に一度実行
        handleResize()

        // クリーンアップ
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}