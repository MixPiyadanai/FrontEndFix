import React from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button,Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState('female');
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Link href="/"><a>Home</a></Link> |
          <Link href="/about"><a> About</a></Link> |
          <Link href="/service"><a> Service</a></Link> |
          <Link href="/products/P001"><a> Products</a></Link> |
          <Link href="/componnent"><a> componnent</a></Link>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <br />
      <center>
      <Button variant="contained" color="primary">
            Hello World
      </Button>
      <br />
      <br />
      <ButtonGroup color="primary" aria-label="contained primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <br />
        <br />
        <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <br />
        <br/>
        <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
      <br />
      <br/>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <br />
      <br />
      <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
    <br />
    <br  />
    <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
      <br />
      <br />
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <br />
      <br />
      <by />
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
      </center>
    </div>
    

  );
}

