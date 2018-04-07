import React from 'react'
import Result from './Result'
import Board from './Board'
import CurrentHint from './CurrentHint'

const noop = () => <div>noop</div>
const HintInput = noop

export default () => (
  <div style={styles.container}>
    <div style={styles.top}>
      <Result />
    </div>
    <div style={styles.main}>
      <Board />
    </div>
    <div style={styles.bottom}>
      <CurrentHint />
    </div>
    {/* <HintInput /> */}
  </div>
)

const styles = {}
styles.container = { display: 'flex', flexDirection: 'column', flex: '1' }
styles.flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
styles.top = { ...styles.flex, flex: 1 }
styles.main = { ...styles.flex, flex: 4 }
styles.bottom = { ...styles.flex, flex: 1 }
