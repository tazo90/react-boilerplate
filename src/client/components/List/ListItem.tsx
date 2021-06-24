import React from 'react'

export interface RecipeProps {
  id: number
  image: string
  alt: string
  title: string
  category: string
  description: string
}

export interface ListItemProps {
  key: number
  recipe: RecipeProps
}

export function ListItem({ recipe }: ListItemProps) {
  return (
    <div className="max-w-md mx-auto mt-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={recipe.image}
            alt={recipe.alt}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {recipe.category}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {recipe.title}
          </a>
          <p className="mt-2 text-gray-500">{recipe.description}</p>
        </div>
      </div>
    </div>
  )
}
