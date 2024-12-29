
import Image from "next/image";

interface TeamMemberProps {
  image: string;
  name: string;
  profession: string;
}

export default function OurTeam() {
  return (
    <div className="main-container w-full max-w-[1440px] px-6 md:px-16 lg:px-24 flex flex-col items-center bg-white mx-auto">
      <div className="py-16 flex flex-col gap-16 items-center">
     
        <div className="text-center max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-[#252b42]">
            Meet Our Team
          </h1>
          <p className="text-sm md:text-base text-[#727272] mt-4">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            image="/images/media.png"
            name="Jane Doe"
            profession="Graphic Designer"
          />
          <TeamMember
            image="/images/media2.png"
            name="John Smith"
            profession="Web Developer"
          />
          <TeamMember
            image="/images/media3.png"
            name="Emily Davis"
            profession="SEO Specialist"
          />
          <TeamMember
            image="/images/redgolden.png"
            name="Michael Lee"
            profession="UI/UX Designer"
          />
          <TeamMember
            image="/images/goldenhair.png"
            name="Sophia Brown"
            profession="Digital Marketer"
          />
          <TeamMember
            image="/images/rainbow.png"
            name="James Wilson"
            profession="Project Manager"
          />
        </div>
      </div>
    </div>
  );
}


function TeamMember({ image, name, profession }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative w-full h-72 lg:h-80">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-center p-6">
        <h3 className="text-xl lg:text-2xl font-bold text-[#252b42]">{name}</h3>
        <p className="text-sm lg:text-base text-[#727272] mt-2">{profession}</p>
       
      </div>
    </div>
  );
}
