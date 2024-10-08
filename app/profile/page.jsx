'use client'

import React, {useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Profile from '@components/Profile'

const MyProfile = () => {
    const { data: session }  = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async() => {
          const response = await fetch('/api/users/${session?.user.id}/posts');
          const data = await response.json();
          console.log("data1:")
          console.log(data);
          setPosts(data);
        }
        if(session?.user.id)fetchPosts();
      }, []);
    

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <div>
      <Profile
        name="My"
        desc="Welcome to your personalized profile page."
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default MyProfile
