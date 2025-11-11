"use client"

import { useState } from "react"

interface Filter {
  label: string
  options: string[]
}

interface CategoryFiltersProps {
  filters: Filter[]
  onFilterChange: (filterName: string, value: string[]) => void
}

export function CategoryFilters({ filters, onFilterChange }: CategoryFiltersProps) {
  const [expandedFilters, setExpandedFilters] = useState<string[]>(filters.map((f) => f.label))
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})

  const handleToggle = (label: string) => {
    setExpandedFilters((prev) => (prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]))
  }

  const handleFilterSelect = (filterLabel: string, option: string) => {
    const newFilters = {
      ...selectedFilters,
      [filterLabel]: selectedFilters[filterLabel]?.includes(option)
        ? selectedFilters[filterLabel].filter((o) => o !== option)
        : [...(selectedFilters[filterLabel] || []), option],
    }
    setSelectedFilters(newFilters)
    onFilterChange(filterLabel, newFilters[filterLabel] || [])
  }

  return (
    <div className="space-y-6">
      {filters.map((filter) => (
        <div key={filter.label} className="border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => handleToggle(filter.label)}
            className="w-full px-4 py-3 font-semibold flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            {filter.label}
            <span className={`transition-transform ${expandedFilters.includes(filter.label) ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {expandedFilters.includes(filter.label) && (
            <div className="border-t border-border p-4 space-y-3">
              {filter.options.map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedFilters[filter.label]?.includes(option) || false}
                    onChange={() => handleFilterSelect(filter.label, option)}
                    className="w-4 h-4 rounded"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
