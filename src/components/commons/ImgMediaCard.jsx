import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import logo from '../../images/GitHubLogo.png'
import { Button } from '@mui/material';

export default function ImgMediaCard({ user, image, github }) {

  const [like, setLike] = React.useState(false);
  const [dislike, setDisLike] = React.useState(false);
  const [elevation, setElevation] = React.useState(1)

  const handleThumbUp = () => {
    setLike(preVal => !preVal)
  }

  const handleThumbDown = () => {
    setDisLike(preVal => !preVal)
  }

  return (
    <Card
      elevation={elevation}
      onMouseEnter={() => setElevation(8)}
      onMouseLeave={() => setElevation(1)}
      sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Link to={`/profile/${user}`} >See whole profile</Link>
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleThumbUp}><ThumbUpIcon color={like ? 'secondary' : 'inherit'} /></Button>
        <a href={github} target="_blank" rel="noreferrer">
          <CardMedia
            component="img"
            alt="GitHub logo"
            height="120"
            image={logo}
          />
        </a>
        <Button onClick={handleThumbDown}><ThumbDownIcon color={dislike ? 'warning' : 'inherit'} /></Button>

      </CardActions>
    </Card>
  );
}