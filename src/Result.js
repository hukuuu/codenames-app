import React from 'react'

const Box = ({ color, full }) => (
  <div
    style={{
      background: color,
      display: 'flex',
      width: '16px',
      height: '16px',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    {!full && (
      <div
        style={{
          background: 'white',
          width: '12px',
          height: '12px',
          borderRadius: '50%'
        }}
      />
    )}
  </div>
)

const boxes = [
  ...Array(5).fill({
    color: 'crimson',
    full: true
  }),
  ...Array(4).fill({
    color: 'crimson',
    full: false
  }),
  ...Array(4).fill({
    color: 'steelblue',
    full: false
  }),
  ...Array(4).fill({
    color: 'steelblue',
    full: true
  })
]

export default () => (
  <div style={styles.container}>
    {boxes.map((box, i) => <Box key={i} color={box.color} full={box.full} />)}
  </div>
)

const styles = {}
styles.container = {
  display: 'flex',
  justifyContent: 'space-evenly',
  padding: '1em 0',
  flex: 1
}
