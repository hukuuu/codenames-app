import React from 'react'
import Page from './Page'
import Slot, { Type } from './Slot'
import Avatar from './Avatar'

const getColor = type => ['crimson', 'steelblue', 'darkslategrey'][type]

const red = 'crimson'
const blue = 'steelblue'
const observer = 'darkslategrey'

export default () => (
  <div style={styles.container}>
    <div style={styles.slots}>
      <Slot title="Tell" color={red}>
        <Avatar color={red} color={red} />
      </Slot>
      <Slot title="Tell" color={blue}>
        <Avatar color={blue} />
      </Slot>
      <Slot title="Guess" color={red}>
        <Avatar color={red} />
      </Slot>
      <Slot title="Guess" color={blue}>
        <Avatar empty color={blue} />
      </Slot>
      <Slot full title="Observers" color={observer}>
        <Avatar small empty color={observer} />
        <Avatar small color={observer} />
        <Avatar small color={observer} />
        <Avatar small color={observer} />
      </Slot>
    </div>
  </div>
)

const styles = {}

styles.container = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}
styles.slots = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap'
}
