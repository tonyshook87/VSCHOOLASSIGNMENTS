import React from 'react'
import Friend from './Friend'

export default function Friendslist({ friends }) {
  //const {friends} = props.  Friends links everything in an easier way.
  return (
    <div>
      {
        friends.map((friend, index) =>
          <Friend key={index}


            name={friend.name}
            age={friend.age}
            pets={friend.pets} />

        )
      }

    </div>
  )
}
