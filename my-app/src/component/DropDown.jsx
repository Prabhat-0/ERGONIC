"use client"
import React from 'react'
import { createPortal } from 'react-dom'
import { FaCheck } from 'react-icons/fa'

const DropDown = ({ languages, selected, onSelect }) => {
  const panel = (
    <div
      style={{ WebkitBackdropFilter: 'blur(24px)', backdropFilter: 'blur(24px)' }}
      className="fixed right-4 top-24 z-[60] flex w-72 flex-col gap-1 rounded-2xl border border-white/20 bg-white/5 p-3 shadow-2xl"
    >
      {languages.map((lang) => {
        const isSelected = selected === lang.value
        return (
          <button
            key={lang.value}
            type="button"
            onClick={() => onSelect(lang.value)}
            className={`flex w-full cursor-pointer items-center gap-3 whitespace-nowrap rounded-xl border px-5 py-3 text-left transition-colors hover:border-white/30 hover:bg-white/10 ${
              isSelected ? 'border-white/30 bg-white/10' : 'border-transparent'
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="text-lg font-bold text-white">{lang.country}</span>
            {isSelected && <FaCheck className="ml-auto text-blue-300" />}
          </button>
        )
      })}
    </div>
  )

  return createPortal(panel, document.body)
}

export default DropDown