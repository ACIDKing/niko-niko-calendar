import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Fab, TextField, Button } from '@material-ui/core'
import { Add, NavigateBefore, NavigateNext } from '@material-ui/icons'
import { Flex } from '@rebass/grid'
import uniqid from 'uniqid'
import { pick, propEq, find } from 'ramda'
import { Table, LineChart } from '../../components'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    height: '2.6rem',
  },
  fab: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
})

const findByNum = (num, arr) => find(propEq('number', num), arr)

class MainContainerComponent extends React.PureComponent {
  state = {
    sprints: [],
    currentSprint: { id: uniqid(), number: 0, team: [], isActive: true },
    name: '',
  }

  handleTeamMemberUpdate = (id, obj) => {
    const { sprints, currentSprint } = this.state

    this.setState({
      sprints: [...sprints],
      currentSprint: {
        ...currentSprint,
        team: currentSprint.team.map(m => (m.id === id ? { ...m, ...obj } : { ...m })),
      },
    })
  }

  handlePrevNextClick = number => {
    const { sprints, currentSprint } = this.state

    const found = findByNum(number, sprints)

    if (found) {
      this.setState({ sprints: [...sprints], currentSprint: { ...found } })
    } else {
      let newSprints = [...sprints]

      if (currentSprint.isActive) {
        newSprints = [...newSprints, { ...currentSprint, isActive: false }]
      }

      this.setState({
        sprints: [...newSprints],
        currentSprint: {
          id: uniqid(),
          number: number,
          team: [...currentSprint.team.map(pick(['id', 'name']))],
          isActive: true,
        },
      })
    }
  }

  handleNameChange = name => this.setState({ name })

  handleAddClick = () => {
    const { sprints, currentSprint, name } = this.state

    if (name) {
      this.setState({
        sprints: [...sprints],
        currentSprint: { ...currentSprint, team: [...currentSprint.team, { id: uniqid(), name }] },
        name: '',
      })
    }
  }

  render() {
    const { classes } = this.props
    const { currentSprint, name } = this.state

    return (
      <Flex justifyContent="center">
        <Flex flexDirection="column" width={3 / 4}>
          <Flex width={1 / 2} my="2rem" alignItems="center">
            <TextField
              id="outlined-name"
              label="Team member name"
              className={classes.textField}
              disabled={!currentSprint.isActive}
              value={name}
              onChange={e => this.handleNameChange(e.target.value)}
              margin="dense"
              variant="outlined"
            />

            <Fab
              size="small"
              color="primary"
              aria-label="Add"
              className={classes.fab}
              disabled={!name || !currentSprint.isActive}
              onClick={this.handleAddClick}>
              <Add />
            </Fab>
          </Flex>
          <Table sprint={currentSprint} onTeamMemberUpdate={this.handleTeamMemberUpdate} />
          <Flex my="2rem" justifyContent="center">
            <Button
              onClick={() => this.handlePrevNextClick(currentSprint.number - 1)}
              disabled={!currentSprint.number}
              variant="contained"
              color="primary"
              className={classes.button}>
              <NavigateBefore className={classes.leftIcon} />
              Prev
            </Button>
            <h4>Sprint #{currentSprint.number + 1}</h4>
            <Button
              onClick={() => this.handlePrevNextClick(currentSprint.number + 1)}
              disabled={!currentSprint.team.length}
              variant="contained"
              color="primary"
              className={classes.button}>
              Next
              <NavigateNext className={classes.rightIcon} />
            </Button>
          </Flex>
          <LineChart sprint={currentSprint} />
        </Flex>
      </Flex>
    )
  }
}

export const MainContainer = withStyles(styles)(MainContainerComponent)
