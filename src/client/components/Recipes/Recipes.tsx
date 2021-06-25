import React from 'react'

import { List, ListItem, RecipeProps } from '@/components/List'

export interface RecipesProps {
  recipes: RecipeProps[]
}

export function Recipes({ recipes }: RecipesProps) {
  return (
    <List>
      {recipes.map((recipe) => (
        <ListItem key={recipe.id} recipe={recipe} />
      ))}
    </List>
  )
}
