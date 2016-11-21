import test from 'ava'
import { parse, stringify } from '../src/util'

const data = [
  {
    message: 'normal',
    host: '127.0.0.1 localhost',
    json: {
      localhost: '127.0.0.1',
    },
  },
  {
    message: 'multiple space',
    host: '127.0.0.1  localhost',
    json: {
      localhost: '127.0.0.1',
    },
    sHost: '127.0.0.1 localhost',
  },
  {
    message: 'multiple line',
    host: '127.0.0.1 localhost\n192.168.0.1 local',
    json: {
      localhost: '127.0.0.1',
      local: '192.168.0.1',
    },
  },
]

/**
 * parse then stringify
 */
const testPair = ({ message, host, json, sHost }) => {
  test(`parse: ${message}`, (t) => {
    t.deepEqual(parse(host), json)
  })

  test(`stringify: ${message}`, (t) => {
    t.deepEqual(stringify(json), sHost || host)
  })
}

data.forEach(testPair)
