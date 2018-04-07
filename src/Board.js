import React from 'react'
import Card from './Card'

const Board = () => (
  <div style={styles.container}>
    {cards.map((card, i) => <Card card={card} key={i} />)}
  </div>
)
export default Board

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
}

const cards = [
  { text: 'africa', color: 'grey', revealed: false },
  { text: 'agent', color: 'steelblue', revealed: false },
  { text: 'air', color: 'grey', revealed: false },
  { text: 'alien', color: 'crimson', revealed: false },
  { text: 'alps', color: 'crimson', revealed: false },
  { text: 'amazon', color: 'steelblue', revealed: false },
  { text: 'ambulance', color: 'steelblue', revealed: false },
  { text: 'america', color: 'steelblue', revealed: false },
  { text: 'angel', color: 'crimson', revealed: false },
  { text: 'antarctica', color: 'crimson', revealed: false },
  { text: 'apple', color: 'grey', revealed: false },
  { text: 'arm', color: 'crimson', revealed: false },
  { text: 'atlantis', color: 'grey', revealed: false },
  { text: 'australia', color: 'crimson', revealed: false },
  { text: 'aztec', color: 'crimson', revealed: false },
  { text: 'back', color: 'steelblue', revealed: false },
  { text: 'ball', color: 'steelblue', revealed: false },
  { text: 'band', color: 'steelblue', revealed: false },
  { text: 'bank', color: 'crimson', revealed: false },
  { text: 'bar', color: 'grey', revealed: false },
  { text: 'bark', color: 'crimson', revealed: false },
  { text: 'bat', color: 'grey', revealed: false },
  { text: 'battery', color: 'crimson', revealed: false },
  { text: 'beach', color: 'steelblue', revealed: false },
  { text: 'bear', color: 'grey', revealed: false },
  { text: 'beat', color: 'black', revealed: false }
]
