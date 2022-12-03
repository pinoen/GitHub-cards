import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DetailCard from './DetailCard';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchAppBar() {

  const [search, setSearch] = React.useState('');
  const [info, setInfo] = React.useState([])

  function searchUser(e) {
    setSearch(e.target.value)
  }

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${search}`)
      .then(res => res.json())
      .then(data => setInfo(data))
  }, [search])

  const navigate = useNavigate()

  function handleLogOut() {
    localStorage.removeItem('github')
    navigate("/")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            GitHub User
          </Typography>
          <Search >
            <IconButton>
              <SearchIcon />
            </IconButton>

            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={searchUser}
            />
          </Search>
          <Button color='warning' variant='filled' onClick={handleLogOut}>LOGOUT</Button>
        </Toolbar>
      </AppBar>

      {search ? <DetailCard
        key={info.id}
        name={info.name}
        creation={info.created_at}
        image={info.avatar_url}
        location={info.location}
        company={info.company}
        blog={info.blog}
        github={info.html_url}
        api={info.url}
        followers={info.followers}
        following={info.following}
        bio={info.bio}
        repos={info.public_repos}
        twitter={info.twitter_username}
      /> : null}
    </Box>


  );
}