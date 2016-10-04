import test from 'ava'
import { parse, stringify } from '../src/util'

const host = '127.0.0.1 localhost'
const json = {
  localhost: '127.0.0.1'
}

test('parse', t => {
  t.deepEqual(
    parse(host),
    json,
    'should parse host correctly'
  )
})

test('stringify', t => {
  t.deepEqual(
    stringify(json),
    host,
    'should stringify host correctly'
  )
})