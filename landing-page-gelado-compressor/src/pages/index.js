import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'
import DownloadButton from '../components/DownloadButon'
import Hotjar from '@/components/integrations/Hotjar'
export default function Home() {
  return (
    <>
      <Head>
        <title>Gelado compress v1.0</title>
        <meta name="compressor de imagens webp, png e jpg" content="Gelado compressor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hotjar/>
      <main className={styles.main}>
          <div className={styles.wrapperDownloadArea}>
            <Image
                src="/logo.svg"
                alt="gelado compressor Logo"
                className={styles.vercelLogo}
                width={207}
                height={108}
                priority
            />
            <DownloadButton
              imgUrl="icons/WindowsLogo.svg"
              altText="gelado compressor windowns logo"
              buttonText="Download for Windows 32bits"
              urlDownload="https://github.com/AbraaoMorais/lp-compressor/raw/main/statics-installers/Gelado%20Compress%20App%20Setup%201.1.0%20-%2032bits.exe"
            />
            <DownloadButton
              imgUrl="icons/WindowsLogo.svg"
              altText="gelado compressor windowns logo"
              buttonText="Download for Windows 64bits"
              urlDownload="https://github.com/AbraaoMorais/lp-compressor/raw/main/statics-installers/My%20Nextron%20App%20Setup%201.1.0.exe"
              buttonInactive={true}
            />
             <DownloadButton
              imgUrl="icons/LinuxLogo.svg"
              altText="gelado compressor linux Logo"
              buttonText="Linux - coming soon..."
              buttonInactive={true}
            />
             <DownloadButton
              imgUrl="icons/AppleLogo.svg"
              altText="gelado compressor apple Logo"
              buttonText="MacOs - coming soon..."
              buttonInactive={true}
            /> 
          </div>
               <Image
                src="/nodebook-demo.png"
                alt="gelado compressor notebook"
                className={styles.notebookImage}
                width={769}
                height={535}
                priority
              />
      </main>
      {/* <section>
        dadad
      </section>
      <footer className={styles.footer}>
        dada
      </footer> */}
    </>
  )
}
