import React from 'react';
import TeamCard from './TeamCard';
import avatar1 from './../../imgs/profile/profile1.png'
import avatar2 from './../../imgs/profile/profile2.png'
import avatar3 from './../../imgs/profile/profile3.png'
import avatar4 from './../../imgs/profile/profile4.png'
import avatar5 from './../../imgs/profile/profile5.png'
import avatar6 from './../../imgs/profile/profile6.png'
import TeamButton from './TeamButton';



const TeamInfo = [
  {
    id:1,
    photo:avatar1,
    name:'John Smith',
    rank:'CEO and Founder',
    bio:'10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
  },
  {
    id:2,
    photo:avatar2,
    name:'Jane Doe',
    rank:'Director of Operations',
    bio:'7+ years of experience in project management and team leadership. Strong organizational and communication skills',

  },
  {
    id:3,
    photo:avatar3,
    name:'Michael Brown',
    rank:'Senior SEO Specialist',
    bio:'5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
 
  },
  {
    id:4,
    photo:avatar4,
    name:'Emily Johnson',
    rank:'PPC Manager',
    bio:'3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',

  },
  {
    id:5,
    photo:avatar5,
    name:'Brian Williams',
    rank:'Social Media Specialist',
    bio:'4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',

  },
  {
    id:6,
    photo:avatar6,
    name:'Sarah Kim',
    rank:'Content Creator',
    bio:'2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
   
    
  }
]



function GroupOfCards() {
  return (
    <>
      <div className=' grid grid-cols-3 items-start gap-10 mx-[100px]'>
        {TeamInfo.map(el => (
          <TeamCard key={el.id} id={el.id} photo={el.photo} name={el.name} rank={el.rank} bio={el.bio} />
        ))}
      </div>

      <TeamButton />
    </>
    
  );
}

export default GroupOfCards;
