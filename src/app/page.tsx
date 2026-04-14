import SocialCard from '@/src/components/SocialCard'
import socialItems from '@/src/data/social.json'

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8">
      <section className="grid gap-y-4 mt-8">
        <div className="grid gap-y-4">
          <h1 className="text-4xl font-bold">Hey, I'm Wesley Ho!</h1>
          <p className="text-md max-w-lg text-zinc-500">
            I'm a Final Year Computer Science Student at National University of Singapore. I am a Software Engineer and am currently learning agentic workflows to make real impact.
          </p>
        </div>
        {/* Add image here */}
      </section>
      <section className="grid grid-cols-5">
        <div className="flex col-span-3 flex-col gap-x-4 gap-y-4">
          <h2 className="text-lg font-bold">Connect with me</h2>
          {/* Bento boxes to social media links */}
          <div className="flex md:grid md:grid-rows-3 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
            <SocialCard item={socialItems.linkedin}/>
            <SocialCard item={socialItems.github}/>
            <SocialCard item={socialItems.telegram}/>
          </div>
        </div>
      </section>
    </div>
  );
}
