import React from 'react'
import Section from '../../components/Section/Section'
import Info from '../../components/Info/Info'

const employments = [
    {
        title: "Leet, Inc.",
        start: "1/1/1337",
        end: "1/2/1337",
        description: "I worked here for one whole day. Most people don't even make it that far.",
        bullets: [],
        badges: ["powerpoint"],
        logo: "/logo512.png"
    },
    {
        title: "Leet, Ltd.",
        start: "1/1/1337",
        end: "1/3/1337",
        description: "I worked here for TWO days. Fairly impressive.",
        bullets: ["one", "two", "three"],
        badges: ["c++"],
        logo: "/logo512.png"
    },
    {
        title: "Ancient, Corp.",
        start: "1/1/1000",
        end: "1/11/1000",
        description: "I put this one out of order just to show sorting. At this job I used GitHub Actions for CI and had CD setup with AWS CodePipeline to automatically build my epic project.",
        bullets: [],
        badges: ["java"],
        logo: "/logo512.png"
    },
].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

export default function Employment() {
    return <Section>
        <div className="display-3 text-center mb-2">
            Experience
        </div>
        {employments.map(({ title, start, end, description, bullets, logo, badges }, i) => <Info title={title} start={start} end={end} description={description} bullets={bullets} logo={logo} badges={badges} key={`employment-${i}-${title}`}></Info>)}
    </Section>
}
