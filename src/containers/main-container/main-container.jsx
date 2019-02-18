import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Fab, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { Flex } from '@rebass/grid'
import uniqid from 'uniqid'

import { Table, LineChart } from '../../components'

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  textField: {
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
})

const fakeSprints = [
  {
    id: uniqid(),
    number: 1,
    team: [],
  },
]
const MainContainerComponent = ({ classes }) => {
  const [currentSprint, setCurrentSprint] = useState(fakeSprints[0])
  const [name, setName] = useState('')

  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column" width={3 / 4}>
        <Flex width={1 / 2} my="2rem" alignItems="center">
          <TextField
            id="outlined-name"
            label="Team member name"
            className={classes.textField}
            value={name}
            onChange={e => setName(e.target.value)}
            margin="dense"
            variant="outlined"
          />

          <Fab
            size="small"
            color="primary"
            aria-label="Add"
            className={classes.fab}
            disabled={!name}
            onClick={() => {
              if (name) {
                setCurrentSprint({ ...currentSprint, team: [...currentSprint.team, { id: uniqid(), name }] })
                setName('')
              }
            }}>
            <AddIcon />
          </Fab>
        </Flex>

        <Table sprint={currentSprint} setCurrentSprint={setCurrentSprint} />
        <LineChart currentSprint={currentSprint} />
      </Flex>
    </Flex>
  )
}

export const MainContainer = withStyles(styles)(MainContainerComponent)
