/**
 * parse host file
 */
export const parse = host => {
  return host.split('\n')
    .map(x => x.split(/\s+/))
    .reduce((a, b) => {
      return Object.assign(a, {
        [b[1]]: b[0]
      })
    }, {})
}

/**
 * stringify host file
 */
export const stringify = json => {
  return Object.keys(json)
    .map(key => `${json[key]} ${key}`)
    .join('\n')
}
