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

// let fakeHosts = {
//   '127.0.0.1': [
//     'www.google.com',
//     'www.facebook.com'
//   ],
//   '192.168.0.1': 'twitter.com'
// }

let fakeHosts = [
  {
    ip: '127.0.0.1',
    names: [
      {
        name: 'www.google.com',
        comment: 'google',
      },
      {
        name: 'www.facebook.com',
        comment: 'facesdf',
      },
    ],
  },
  {
    ip: '192.168.0.1',
    names: ['twitter.com'],
  },
]

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
