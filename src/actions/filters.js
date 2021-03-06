//SET_TEXT_FILTER
export const setTextFilter = (text = '')=> ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SORT_BY_IN_STOCK
export const sortByInStock = () => ({
  type: 'SORT_BY_IN_STOCK'
})

// SORT_BY_ITEM_ID
export const sortByItemID = () => ({
  type: 'SORT_BY_ITEM_ID'
})

// SORT_BY_DESCRIPTION
export const sortByDescription = () => ({
  type: 'SORT_BY_DESCRIPTION'
})

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})