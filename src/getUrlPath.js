const getUrlPath = (path = '/') => {
  const localhost = `http://localhost:3000${path}`
  
  if (process.env.REACT_APP_BOOKS_API) {
    return `${process.env.REACT_APP_BOOKS_API}${path}`
  } return localhost
}

module.exports = getUrlPath