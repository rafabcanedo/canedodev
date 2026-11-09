import { Title } from "@/components/my-components/title"
import { ExperienceCard } from "@/components/my-components/experience-card"
import { aboutPageParagraphs, aboutDetails, aboutGoals } from "@/data/about"

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 grid grid-cols-2 gap-16">
      <div className="flex flex-col gap-4">
        {aboutPageParagraphs.map((paragraph, index) => (
          <p key={index} className="text-base text-muted-foreground leading-relaxed">{paragraph}</p>
        ))}
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          {aboutDetails.map((detail) => (
            <ExperienceCard key={detail.label} detail={detail} />
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <Title>My goals</Title>
          <ul className="flex flex-col gap-2">
            {aboutGoals.map((goal, index) => (
              <li key={index} className="text-sm text-muted-foreground">• {goal}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
