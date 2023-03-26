import React from "react";
import TimeLineElement from "./TimeLineElement";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  MdOutlineEmojiEvents,
  MdEmojiEvents,
} from "react-icons/md";
import {GiInauguration , GiBookCover , GiMagnifyingGlass} from "react-icons/gi"
import {TbSocial} from "react-icons/tb"
import { BiLaugh } from "react-icons/bi";
import { SiLionair } from "react-icons/si";
import { VscSymbolEvent } from "react-icons/vsc";
import { BsShopWindow } from "react-icons/bs";
const Itenary = () => {
  return (
    <div className="bg-[url('https://images.hdqwalls.com/wallpapers/planet-space-mars-4k-8l.jpg')] bg-cover bg-center bg-scroll 2xl:mx-auto">
      <div className="bg-background/70 w-screen">
        <h1 className=" text-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
          Itenary
        </h1>

        {/*======================= day 1 ==================== */}
        <div className="place-items-center px-12 md:gap-2">
          <h1 className="text-6xl font-bold text-white pl-16 pt-8">Day 1</h1>
          <h1 className="text-2xl font-bold text-white pl-16 ">
            4th February 2023
          </h1>

          <VerticalTimeline className="mx-auto"
          >
            <TimeLineElement
              icon={<GiInauguration/>}
              title="Inauguration-LDS Panel 1"
              date="10:30 - 12:00, BR Audi - Day 1 begins with the leadership 
              and disruption series wherein speakers, entrepreneurs, leaders, 
              and all those who made an impact with glorious achievements in their 
              spectrum of work share their career journey to inspire the attendees.
               Top industrialists of our country impart various tips and 
              techniques that the youth may utilize to make it big in their careers."
          
              
            />

            <TimeLineElement
              icon={<SiLionair />}
              title="LDS Panel-2"
              date="12:30 - 02:00, BR Audi"
            />

            <TimeLineElement
              icon={<TbSocial />}
              title="Startup Social"
              date="02:00 - 04:00 - Esteemed speakers from various fields, unicorn startup founders, venture capitalists and top notch industrialists presented their perspective on the ‘ingredients it takes to make unicorns’. The panel discussion encompasses esteemed speakers and their views on redefining leadership in the disruptive era."
            />
            <TimeLineElement
              icon={<GiBookCover />}
              title="Lecture Series"
              date="04:00 - 05:00, OAT"
            />
            <TimeLineElement
              icon={<MdOutlineEmojiEvents />}
              title="Society Events / Content Creator"
              date="05:00 - 06:00, OAT"
            />
            <TimeLineElement
              icon={<BiLaugh />}
              title="Comedy Evening"
              date="06:00 Onwards, OAT - To conclude Day 1 of E-Summit on a lighter note, the Comedy Night will be held. The evening begins with a short performance of a local comedian followed by the main act and concludes with an improv session with some of the top improv artists of the industry. We have had the pleasure of having numerous top comedians of India, such as Biswa Kalyan Rath, Kenny Sebastien, and Abhishek Upmanyu who have performed and exhilarated the audience with their wit and humor."
            />
          </VerticalTimeline>
        </div>

        {/*======================= day 2 ==================== */}
        <div className="place-items-center px-12 md:gap-2">
          <h1 className="text-6xl font-bold text-white pl-16 pt-8">Day 2</h1>
          <h1 className="text-2xl font-bold text-white pl-16 ">
            5th February 2023
          </h1>

          <VerticalTimeline className="mx-auto">
          
            <TimeLineElement
              icon={<SiLionair />}
              title="Investors Clique - 2"
              date="11:00 - 12:30"
            />
            <TimeLineElement
              icon={<MdOutlineEmojiEvents/>}
              title="B - Plan"
              date="11:00 - 12:30 - Day 2 marks the beginning of the most ideal showcase event that provides an avenue to thousands of startup enthusiasts to exhibit their business acumen, creativity, and innovation - The UDAAN Startupthon. One of the flagship events of E-Cell DTU, it aims to promote the spirit of Entrepreneurship."
            />
            <TimeLineElement
              icon={<GiMagnifyingGlass />}
              title="Case Study"
              date="11:00 - 12:30"
            />

            <TimeLineElement
              icon={<BsShopWindow />}
              title=" Market Competition"
              date="12:00 - 01:30"
            />

            <TimeLineElement
              icon={<GiBookCover />}
              title="Lecture Series - 2"
              date="04:00 - 05:00, OAT"
            />

            <TimeLineElement
              icon={<VscSymbolEvent />}
              title="Content Creator"
              date="05:00 - 06:00, OAT -  We also have a session on some of the more unconventional forms of entrepreneurship namely youtube entrepreneurship, various YouTubers, and social media influencers share their experiences with the massive crowd assembled at the Open Amphitheatre. We have had the pleasure of hosting various content creators such as Harsh Beniwal Amit Badhana, Slay point, RJ Abhinav - The FAAD magician, Nazarbattu for this event."
            />

            <TimeLineElement
              icon={<BiLaugh />}
              title="Comedy Evening"
              date="06:00 Onwards, OAT - To conclude E-Summit on a lighter note, the Comedy Night is held right after the Content Creator Summit. The evening begins with a short performance of a local comedian followed by the main act and concludes with an improv session with some of the top improv artists of the industry. We have had the pleasure of having numerous top comedians of India, such as Biswa Kalyan Rath, Kenny Sebastien, and Abhishek Upmanyu who have performed and exhilarated the audience with their wit and humor."
            />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Itenary;
