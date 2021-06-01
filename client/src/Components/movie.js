import React, { useEffect, useState } from "react";
import { Form, Button, Col, Container } from 'react-bootstrap'
import axios from 'axios'


import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';


const AddNewMovie = () => {

  const api = axios.create({
    baseURL: 'http://localhost:5000/index/admin',
    withCredentials: false
  })
  const [moviename, setMoviename] = useState('');
  const [movieboughtdate, setMoviebouthtdate] = useState('');
  const [genre, setGenre] = useState('');
  const [duration, setDuration] = useState('');
  const [year, setYear] = useState('');


  const postData = () => {
    if (moviename !== '' && movieboughtdate !== '' && genre !== '' && duration !== '' && year !== '') {
      const moviedata = { moviename, movieboughtdate, genre, duration, year }
      api.post('/registermovie', moviedata).then(

        result => {
          if (result.stats === 200) {
            console.log(result)
            setMoviename('');
            setMoviebouthtdate('')
            setDuration('')
            setYear('')
            setGenre('')
            window.alert("Movie Data Posted")
          }
        }).catch(err => { console.log(err) })
    } else {
      window.alert('Please Enter the Data in all the field!')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  return <div>
    <Container style={{ 'height': '100vh' }}>
      <Form method="POST" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" name='moviename' value={moviename} placeholder="Enter Movie Name" onChange={(e) => { setMoviename(e.target.value) }} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date" value={movieboughtdate} onChange={(e) => { setMoviebouthtdate(e.target.value) }} />
          </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="formGridGenre">
          <Form.Label>Movie Genre</Form.Label>
          <Form.Control type="text" name='genre' value={genre} placeholder="Enter Movie Genre" onChange={(e) => { setGenre(e.target.value) }} />
        </Form.Group>


        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Movie Duration</Form.Label>
            <Form.Control type="text" name='duration' value={duration} placeholder="Enter Movie Duration : _hr _mins " onChange={(e) => { setDuration(e.target.value) }} />
          </Form.Group>



          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Movie Year</Form.Label>
            <Form.Control type="number" name='year' placeholder="Enter Movie Year" value={year} onChange={(e) => { setYear(e.target.value) }} />

          </Form.Group>
        </Form.Row>


        <Button variant="primary" type="submit" onClick={postData}>
          Submit
        </Button>
      </Form>

      {/* <prev>{JSON.stringify(moviename, null, 2)}</prev>
<prev>{JSON.stringify(moviebouthtdate, null, 2)}</prev>
<prev>{JSON.stringify(genre, null, 2)}</prev>
<prev>{JSON.stringify(duration, null, 2)}</prev>
<prev>{JSON.stringify(year, null, 2)}</prev> */}


    </Container>
  </div>;
};

export default AddNewMovie;







function CreateData(moviename, movieboughtdate, genre, duration, year) {
  return { moviename, movieboughtdate, genre, duration, year};
}

const fetchData = ()=>{
axios.get('/index/admin/listmovies').then(
  result=>{
    console.log(result)
  }
).catch(err =>{console.log(err)})

}

const rows = [
  CreateData('Godzila', 305, 3.7, 67, 4.3),
  CreateData('Moez', 305, 3.7, 67, 4.3),
  
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'moviename', numeric: false, disablePadding: true, label: 'Movie Name' },
  { id: 'movieboughtdate', numeric: true, disablePadding: false, label: 'Movie Bought Date' },
  { id: 'genre', numeric: false, disablePadding: false, label: 'Genre' },
  { id: 'duration', numeric: true, disablePadding: false, label: 'Duration' },
  { id: 'year', numeric: true, disablePadding: false, label: 'Year' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
 
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all Movies' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const onClickDel=()=>{
    console.log('clicked Delete Buttton')
    console.log('data to be delted: ', props.data)
  }
  
  useEffect(
  fetchData()
   ,[])
    
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
          <Button onClick={onClickDel}>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
            
          </IconButton>
        </Tooltip>

          </Button>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export  function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('year');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.moviename);
      console.log('newSelecteds >>',newSelecteds)
      
      setSelected(newSelecteds);
      console.log('selected >>',selected)
      
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, moviename) => {
    const selectedIndex = selected.indexOf(moviename);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, moviename);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
console.log(newSelected)
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 

  const isSelected = (moviename) => selected.indexOf(moviename) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} data={selected} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.moviename);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.moviename)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.moviename}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.moviename}
                      </TableCell>
                      <TableCell align="right">{row.movieboughtdate}</TableCell>
                      <TableCell align="right">{row.genre}</TableCell>
                      <TableCell align="right">{row.duration}</TableCell>
                      <TableCell align="right">{row.year}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    
                      <prev>{JSON.stringify(selected, null, 2)}</prev>

    </div>
  );
}


