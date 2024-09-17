import React from 'react'
import Link from 'next/link';

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full glassmorphism'>
      <h1 className='head_text flex-col glassmorphism'>
        <span className='blue_gradient'>
            {type} Post
        </span>
      </h1>
      <br/>
      <p className='desc w-full flex-col glassmorphism'>
        Create your project prompt for a project idea using the power of AI.
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full flex flex-col gap-7 glassmorphism'
      >
        <span className='font-satoshi font-semibold text-base text-gray-700'>
          Your project area you want to do something in.
        </span>
        <textarea 
          value={post.prompt}
          onChange={(e) => setPost({ ...post,prompt:e.target.value})}
          placeholder='Write your prompt here...'
          required
          className='form_textarea'
          />


        <span className='font-satoshi font-semibold text-base text-gray-700'>
          Tag (#product,#webdevelopment,#idea)
        </span>
        <input
          value={post.tag}
          onChange={(e) => setPost({ ...post,tag:e.target.value})}
          placeholder='#tag'
          required
          className='form_input'
          />

          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link 
              href='/'
              className='text-gray-500 text-sm'
            >
              Cancel
            </Link>

            <button
              type="submit"
              disabled={submitting}
              className='px-5 py-1.5 bg-purple-700 rounded-full text-white'
            >
              {submitting ? `${type}...` : type}
            </button>
          </div>
      </form>
    </section>
  )
}

export default Form
