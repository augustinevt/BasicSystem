import { sensitiveWords } from '.'

xtest('replaces blacklisted words with asterisks', () => {
  expect(sensitiveWords(
    'The name of the NX with be Nintendo Switch',
   ['switch']
 )).toBe('The name of the NX with be Nintendo ****')
})

xtest('replaces multiple blacklisted words with asterisks', () => {
  expect(sensitiveWords(
    'The name of the NX with be Nintendo Switch. The switch will be awesome.',
   ['switch']
 )).toBe('The name of the NX with be Nintendo ****. The **** will be awesome.')
})