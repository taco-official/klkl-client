function inArray(array, id) {
  return array.some((selected) => selected.id === id)
}

export default inArray
