/**
 * parse host file
 */
export function parse(file) {
  return file.split('\n')
    .map(line => line.trim())
    .filter(line => line.length) // remove blank line
    .reduce((obj, line) => {
      const [ip, ...rest] = line.split(/\s+/)
      const hosts = rest.join(' ')
    }, {})
}

/**
 * stringify host file
 */
export function stringify(json) {
  const content = Object.keys(json)
    .map((ip) => {
      const obj = json[ip]
      return Object.keys(obj).reduce((ip, line) => obj[ip] ? line + ip : ip + line, '#')
    })
    .join('\n')

  return `HOST-MANAGER DO NOT EDIT\n\n${content}`
}

export const fakeHosts = `
  127.0.0.1 www.google.com www.facebook.com
  192.168.0.1 twitter.com
`

export function convert(hostsObject) {
  // return Object.keys(hostsObject).map(ip => ({
  //   ip,
  //   hosts: Object.keys(hostsObject[ip]).map(name => ({
  //     name,
  //     active: hostsObject[ip][name],
  //   })),
  // }))
  return Object.keys(hostsObject).map(host => ({
    host,
    ip: hostsObject[host],
  }))
}

/**
 * Read hosts
 */
export function readHosts() {
  return new Promise((resolve, reject) => {
    window.require('fs').readFile('/etc/hosts', (err, data) => {
      if (err) {
        return reject(err)
      }

      return resolve(data.toString())
    })
  })
}

/**
 * Write hosts to file system
 */
export async function writeHosts(hosts) {
  try {
    // fakeHosts = hosts
    return true
  } catch (err) {
    return false
  }
}
