'use client'
import React, {useState, useEffect } from 'react';

import PromptCard from './PromptCard';

const PromptCardList = ({data, handdleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) =>(
        <PromptCard
        key={post._id}
        post={post}
        handleTagClick={handdleTagClick}
      />
      ))}
    </div>
  );
}

const Feed = () => {
  const [searchText, setSearchtext] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {

  }

  useEffect(() => {
    const fetchPosts = async() => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      <form className="relative w-full flex-center">
        <input
        type="text"
        placeholder='Search for prompts'
        value={searchText}
        onChange={handleSearchChange}
        required
        className='search_input peer'
        />
      </form>
      <PromptCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}

export default Feed
