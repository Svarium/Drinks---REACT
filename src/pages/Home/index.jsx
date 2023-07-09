import React from 'react'
import { SearchForm } from '../../components/SearchForm'
import useUser from '../../hooks/useUser'
import { Link } from 'react-router-dom'
import { DrinksList } from '../../components/DrinksList'
import { DrinkModalDetail } from '../../components/DrinkModalDetail'

export const Home = () => {

  
  return (
    <>
     <SearchForm></SearchForm>
     <DrinksList></DrinksList>
     <DrinkModalDetail/>
    </>
  )
}
