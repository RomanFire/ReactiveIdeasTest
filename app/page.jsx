import React from "react"
import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h2 className="head_text text-center">
            Share, Collaborate & Build
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">Powerful Code</span>
        </h2>
        <p className="text-center text-orange-100 ">
            ReactiveIdeas is a platform to test out building in next.js 14 while also creating a place for people to share their ideas on different projects
        </p>

        <Feed />
    </section>
  )
}

export default Home
