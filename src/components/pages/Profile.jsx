import React from 'react'
import { useParams } from 'react-router-dom'
import DetailCard from '../commons/DetailCard'
import styled from '../../styles/styled.module.css'

const Profile = () => {

  const [info, setInfo] = React.useState([])

  let { user } = useParams()
  console.log(info)

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then(res => res.json())
      .then(data => setInfo(data))
  }, [user])


  return (
    <div className={styled.detailCardContainer}>
      <DetailCard
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
      />
    </div>
  )
}

export default Profile