export function selectBook(book) {
  // selectBook is an ActionCreator, it need to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
    // payload is more information
    // about the action being created
  };
}
