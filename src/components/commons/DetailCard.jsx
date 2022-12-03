import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';


export default function DetailCard({ name, creation, image, location, company, blog, github, api, followers, following, repos }) {



  return (
    <Card
      sx={{ maxWidth: 500, padding: 5 }}>
      <Link to={"/home"} underline="none">GO BACK</Link>
      <CardHeader
        avatar={
          <Avatar aria-label="avatar" src={image} >
          </Avatar>
        }
        title={name}
        subheader={creation}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="User avatar"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name} lives in {location}. He/She works at {company} as software engineer. Know more about him/her on <a href={blog} target="_blank" rel="noreferrer">{blog}</a> or on his GitHub page at <a href={github} target="_blank" rel="noreferrer">{github}</a>. To verify this information, please, visit the official API for this user <a href={api} target="_blank" rel="noreferrer">{api}</a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Avatar sx={{ bgcolor: red[500], fontSize: 12 }} aria-label="followers">
            {followers > 999 ? Math.floor(followers / 1000) + "K" : followers}
          </Avatar>
          <GroupAddIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Avatar sx={{ bgcolor: red[500], fontSize: 12 }} aria-label="following">
            {following}
          </Avatar>
          <Diversity3Icon />
        </IconButton>
        <IconButton aria-label="share">
          <Avatar sx={{ bgcolor: red[500], fontSize: 12 }} aria-label="repos">
            {repos}
          </Avatar>
          <LibraryBooksIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}