'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';


const PromptCard = (post, handleTagClick, handleEdit, handleDelete) => {
  const [copied, setCopied] = useState("");

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div>
          <Image
            src={post.post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className='rounded-full object-contain'
          />

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.post.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {post.post.creator.email}
            </p>
          </div>

          <p className='my-4 font-satoshi text-sm text-gray-700'>
            {post.post.prompt}
          </p>
          <p 
            className='font-inter text-sm blue_gradient cursor-pointer'
            onClick={() => handleTagClick && handdleTagClick(post.post.tag)}
          >
            {post.post.tag}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PromptCard
