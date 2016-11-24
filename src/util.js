/**
 * parse host file
 */
export const parse = host => host.split('\n')
    .map(x => x.split(/\s+/))
    .reduce((a, b) => Object.assign(a, {
      [b[1]]: b[0],
    }), {})

/**
 * stringify host file
 */
export const stringify = json => Object.keys(json)
    .map(key => `${json[key]} ${key}`)
    .join('\n')

let fakeHosts = {
  '127.0.0.1': {
    'www.google.com': true,
    'www.facebook.com': false,
  },
  '192.168.0.1': {
    'twitter.com': true,
  },
}

export function convert(hostsObject) {
  return Object.keys(hostsObject).map(ip => ({
    ip,
    hosts: Object.keys(hostsObject[ip]).map(name => ({
      name,
      active: hostsObject[ip][name],
    })),
  }))
}

/**
 * Read hosts
 */
export async function readHosts() {
  return fakeHosts
}

/**
 * Write hosts to file system
 */
export async function writeHosts(hosts) {
  try {
    fakeHosts = hosts
    return true
  } catch (err) {
    return false
  }
}
