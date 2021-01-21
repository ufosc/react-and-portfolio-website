import React from 'react'
import Section from '../../components/Section/Section'
import Info from '../../components/Info/Info'

const education_info = [
    {
        title: "University of Florida",
        start: "1/1/1337",
        end: "1/2/1337",
        description: "I studied here for one whole day. Most people don't even make it that far.",
        bullets: [],
        badges: ["M.S Computer Science", 'Business Minor'],
        logo: "/logo512.png"
    },
    {
        title: "MIT",
        start: "1/1/1000",
        end: "1/11/1004",
        description: "I put this one out of order just to show sorting. At this job I used GitHub Actions for CI and had CD setup with AWS CodePipeline to automatically build my epic project.",
        bullets: [],
        badges: ["B.S. Computer Science"],
        logo: "/logo512.png"
    },
].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

export default function Education() {
    return <Section>
        <div className="display-3 text-center mb-2">
            Education
        </div>
        {education_info.map(({ title, start, end, description, bullets, logo, badges }, i) => <Info title={title} start={start} end={end} description={description} bullets={bullets} logo={logo} badges={badges} key={`employment-${i}-${title}`}></Info>)}
    </Section>
}
