import React from "react"

export default function Card({ row }) {
    return (
        <>
            <div className="w-[19.5rem] h-36 rounded-md flex flex-col" style={{backgroundColor: row}}>
            </div>
        </>
    )
}