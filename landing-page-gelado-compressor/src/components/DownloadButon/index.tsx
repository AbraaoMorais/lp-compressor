import React from 'react'
import styles from '../DownloadButon/index.module.scss'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--inter-font',
    weight: ['100','400','900']
})

export default function index(props) {
  return (
   <>
    <button 
        // style={inter.style}
        className={styles.buttonDownload + ' ' + inter.variable}
        onClick={()=> window.open(props.urlDownload,'_blank')}
    > 
        <Image
            src={props.imgUrl}
            alt={props.altText}
            width={33}
            height={33}
            priority
        />
        <span>{props.buttonText || 'button name'}</span>
    </button>
   </>
  )
}
