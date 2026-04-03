import SocialCard from '@/src/components/SocialCard'
import socialItems from '@/src/data/social.json'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <section className="grid grid-cols-5 gap-x-4 gap-y-4">
        <div className="grid col-span-3 gap-y-8">
          <p className="text-xs max-w-lg text-zinc-500">
            Hi, I am Wesley! I am a Final Year Computer Science Student at National University of Singapore. I aspire to be a full-stack software engineer and currently learning agentic workflows to make real impact.
          </p>
          <div className="grid grid-cols-4 gap-x-4 gap-y-4">
            <h2 className="col-span-4 font-medium">Connect with me</h2>
            {/* Bento boxes to social media links */}
            <SocialCard item={socialItems.linkedin}/>
            <SocialCard item={socialItems.github}/>
            <SocialCard item={socialItems.telegram}/>
          </div>
        </div>
        {/* Add image here */}
      </section>
    </div>
  );
}
