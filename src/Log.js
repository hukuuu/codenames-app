import React from 'react'
import CurrentHint from './CurrentHint'
import Card from './Card'

const Pass = () => (
  <div
    style={{
      color: 'grey',
      fontSize: '2em',
      alignItems: 'center'
    }}
  >
    Pass
  </div>
)

const Log = ({ item, key }) => (
  <div style={styles.log}>
    {item.type === 'card' && <Card card={item} />}
    {item.type === 'hint' && <CurrentHint hint={item} />}
    {item.type === 'pass' && <Pass />}
  </div>
)

export default () => (
  <div style={styles.container}>
    {log.map((item, i) => <Log item={item} key={i} />)}
  </div>
)

const log = [
  { text: 'Lord of the rings - 4', color: 'crimson', type: 'hint' },
  { text: 'alien', color: 'crimson', type: 'card' },
  { text: 'alps', color: 'crimson', type: 'card' },
  { text: 'africa', color: 'grey', type: 'card' },
  { text: 'wall - 3', color: 'steelblue', type: 'hint' },
  { text: 'agent', color: 'steelblue', type: 'card' },
  { text: 'amazon', color: 'steelblue', type: 'card' },
  { text: 'ambulance', color: 'steelblue', type: 'card' },
  { text: '', color: 'grey', type: 'pass' },
  { text: 'amazon - infinity', color: 'crimson', type: 'hint' },
  { text: 'angel', color: 'crimson', type: 'card' },
  { text: 'antarctica', color: 'crimson', type: 'card' },
  { text: 'arm', color: 'crimson', type: 'card' },
  { text: 'australia', color: 'crimson', type: 'card' },
  { text: 'aztec', color: 'crimson', type: 'card' },
  { text: 'back', color: 'black', type: 'card' }
]

const styles = {}
styles.container = {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  // justifyContent: 'center',
  overflowY: 'scroll'
}
styles.log = {
  // display: 'flex',
  padding: '.3rem'
}
