import React from "react";
import { Timeline, Button } from "flowbite-react";

const TimelineComponent = () => {
  return (
    <div className="">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>August 2024 - December 2024</Timeline.Time>
            <Timeline.Title>Software Engineer</Timeline.Title>
            <Timeline.Body>APP Group (Sinarmas) · Internship</Timeline.Body>
            <Timeline.Body>
              Develop functionalities for credit payment validation web platform
              with video call and Geo-encoding for live location features
            </Timeline.Body>
            <Timeline.Body className="text-black text-xs">
              Tools : Nextjs, Nestjs, React, Typescript, WebRTC, Tailwind,
              Shadcn.UI, Prisma, PostgreSQL
            </Timeline.Body>
            <Button color="gray">Learn More</Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>August 2024 - September 2024</Timeline.Time>
            <Timeline.Title>Software Engineer</Timeline.Title>
            <Timeline.Body>
              Lomba Lintas Lembah dan Bukit · Contract
            </Timeline.Body>
            <Timeline.Body>
              Developed mobile responsive and dynamic page using tailwind and
              shadcn.UI for the biggest running competition at Padjadjaran
              University
            </Timeline.Body>
            <Timeline.Body className="text-black text-xs">
              Tools : Nextjs, React, Typescript, Tailwind, Shadcn.UI
            </Timeline.Body>
            <Button color="gray">Learn More</Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>July 2024 - August 2024</Timeline.Time>
            <Timeline.Title>Frontend Engineer</Timeline.Title>
            <Timeline.Body>Prabu Unpad 2024 · Contract</Timeline.Body>
            <Timeline.Body>
              Developed 3 mobile responsive and dynamic page using blade(FaQ
              Section, Homepage, and Event Page) <br />
              for the biggest orientation event at Padjadjaran University
            </Timeline.Body>
            <Timeline.Body className="text-black text-xs">
              Tools : Laravel, Flowbite, Tailwind, Filament
            </Timeline.Body>
            <Button color="gray">Learn More</Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2024 - July 2024</Timeline.Time>
            <Timeline.Title>Website Manager</Timeline.Title>
            <Timeline.Body>TEDxUnpad · Full-time</Timeline.Body>
            <Timeline.Body>
              Act as a frontend and project manager where I oversees and develop
              a parallax landing page and an interactive secret riddle page,
              <br />a dynamic speakers page showcasing profiles, and an engaging
              main event page
            </Timeline.Body>
            <Timeline.Body className="text-black text-xs">
              Tools : Nextjs, React, Typescript, Tailwind, Shadcn.UI, Prisma,
              MongoDB
            </Timeline.Body>
            <Button color="gray">Learn More</Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2024 - August 2024</Timeline.Time>
            <Timeline.Title>Frontend Engineer</Timeline.Title>
            <Timeline.Body>PT.Cahaya Dua Berlian · Internship</Timeline.Body>
            <Timeline.Body>
              Develop responsive landing page and products page using React.js
              and Shadcn.UI and Integrate strapi API with products page
            </Timeline.Body>
            <Timeline.Body className="text-black text-xs">
              Tools : Nextjs, React, Typescript, Tailwind, Shadcn.UI
            </Timeline.Body>
            <Button color="gray">Learn More</Button>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default TimelineComponent;
