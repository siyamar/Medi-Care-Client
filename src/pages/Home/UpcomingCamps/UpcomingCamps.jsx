import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const UpcomingCamps = () => {
    return (
        <div>
            <SectionTitle heading={"Upcoming Camps"}></SectionTitle>
            <Timeline className="mx-10 w-1/2">
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2024</Timeline.Time>
          <Timeline.Title>Heart Health Expo</Timeline.Title>
          <Timeline.Body>
            Dedicated to heart health, this expo provides screenings, expert advice, and tools for maintaining a healthy heart. Invest in your cardiovascular well-being!
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2024</Timeline.Time>
          <Timeline.Title>Wellness for All</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2024</Timeline.Time>
          <Timeline.Title>Diabetes Care Expo</Timeline.Title>
          <Timeline.Body>
          Join us in the fight against diabetes! The expo offers screenings, expert advice, and resources for effective diabetes management and prevention.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
        </div>
    );
};

export default UpcomingCamps;