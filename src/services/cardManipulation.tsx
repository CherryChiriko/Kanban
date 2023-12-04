import ICard from "../interfaces/ICard"
import {nanoid} from 'nanoid';

export function initializeCard(card : ICard){
    const newCard = {
      ...card,
      id: nanoid(),
      givenName: card.givenName || card.originalName,
      dateChecked: null
    }
    return newCard
}

export function dateConvert(str : string){
  return Date.parse(str)
}