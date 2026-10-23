import { Intro } from "@/components/sections/intro"
import { AboutMe } from "@/components/sections/about-me"
import { HowIWork } from "@/components/sections/how-i-work"
import { MyExperience } from "@/components/sections/my-experience"
import { MyPersonalBlog } from "@/components/sections/my-personal-blog"

export default function Home() {
  return (
    <main>
      <Intro />
      <AboutMe />
      <HowIWork />
      <MyExperience />
      <MyPersonalBlog />
    </main>
  )
}
