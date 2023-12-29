import Image from 'next/image'
import styles from './page.module.css'
import Subreddits from "@/app/subreddits/page";
import SideBar from '@/app/sidebar/page';



export default function Home() {
  return (
    <div>
      <Subreddits />
      <SideBar userLoggedIn={false} />
    </div>
  )
}


