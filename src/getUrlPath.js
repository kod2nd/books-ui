const getUrlPath = (path = null) => {
  const localhost = `http://localhost:3000/${path}`
  return localhost
}

module.exports = getUrlPath