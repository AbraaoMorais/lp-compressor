import React from 'react'
import styles from '../DownloadButon/index.module.scss'
import Image from 'next/image'

export default function index(props) {
  return (
   <>
    <button 
        className={styles.buttonDownload}
    > 
        <Image
            src={props.imgUrl}
            alt={props.altText}
            width={33}
            height={33}
            priority
        />
        <span>Download for Windows</span>
    </button>
   </>
  )
}
