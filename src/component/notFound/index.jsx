import React from 'react'
import stayle from './NotFaund.module.scss'


export const NotFaundBlock= () => {
  return (
    <h1 className={stayle.root} >
        <span> ☹️</span>
        <dr/>
        <p>Нечего не найдено</p>
        <p className={stayle.descr}>К сoжалению в нашем магазине не было нечего найденно</p>
    </h1>
  )
}
