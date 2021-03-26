// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'

import Logo from '../assets/logo.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>

      <Logo />
      <h1>ReactJS + Next.js Structure with Typescript, ESLint and Styled Components</h1>
      <p>A ReactJS + Next.js structure made by Diego Fernandes (Rocketseat) and customized by Wendell Lucena.</p>
    </Container>
  )
}

export default Home
