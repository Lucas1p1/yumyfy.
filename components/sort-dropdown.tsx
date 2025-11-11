"use client"

import { useState } from "react"

interface SortOption {
  label: string
  value: string
}

interface SortDropdownProps {
  options: SortOption[]
  onSort: (value: string) => void
}

export function SortDropdown({ options, onSort }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])

  const handleSelect = (option: SortOption) => {
    setSelected(option)
    onSort(option.value)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full md:w-48">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 border border-border rounded-lg bg-card flex items-center justify-between hover:border-primary/50 transition-colors"
      >
        <span className="text-sm font-medium">{selected.label}</span>
        <span className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 border border-border rounded-lg bg-card shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-4 py-2 hover:bg-muted transition-colors text-sm ${
                selected.value === option.value ? "bg-primary/10 text-primary font-semibold" : ""
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
