const hosts = MacGap.File.read('/etc/hosts', 'string');

const parseHost = host => {
  return host.split('\n')
    .map(x => x.split(/\s+/))
    .reduce((a, b) => {
      return Object.assign(a, {
        [b[1]]: b[0]
      })
    }, {})
}

const stringifyHost = json => {
  return Object.keys(json)
    .map(key => `${json[key]} ${key}`)
    .join('\n')
}
