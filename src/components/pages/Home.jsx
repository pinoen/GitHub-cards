import * as React from 'react';
import SearchAppBar from '../commons/SearchAppBar';
import ImgMediaCard from '../commons/ImgMediaCard';
import styled from '../../styles/styled.module.css'


const Home = () => {

  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    console.log('hola')
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  console.log(users)

  return (
    <>

      <SearchAppBar />

      <div className={styled.cardContainer}>
        {users.map(user => (
          <ImgMediaCard
            key={user.id}
            user={user.login}
            image={user.avatar_url}
            github={user.html_url}

          />
        ))}
      </div>

    </>
  );
}

export default Home