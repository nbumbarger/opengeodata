'use strict'
export const UPDATE_MENU_OPEN = 'UPDATE_MENU_OPEN'

export const updateMenuOpen = (bool) => {
  return { type: UPDATE_MENU_OPEN, data: bool }
}
