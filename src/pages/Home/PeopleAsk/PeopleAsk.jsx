import { Accordion } from "flowbite-react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PeopleAsk = () => {
  return (
    <div className="my-8">
      <SectionTitle heading={"People Ask???"}></SectionTitle>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            What is the main purpose of MediCare?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Medicare is a broad program of health insurance designed to assist
              the nation's elderly to meet hospital, medical, and other health
              costs. Medicare is available to most individuals 65 years of age
              and older. Medicare is a broad program of health insurance
              designed to assist the nation's elderly to meet hospital, medical,
              and other health costs. Medicare is available to most individuals
              10 years of age and older.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            What kind of services does it provide?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Part A covers inpatient hospital stays, care in a skilled nursing
              facility, hospice care, and some home health care. Part B covers
              certain doctors' services, outpatient care, medical supplies, and
              preventive services. hospice care, and some home health care. Part
              B covers certain doctors' services, outpatient care, medical
              supplies, and preventive services.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How do I register these Camps?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Part A covers inpatient hospital stays, care in a skilled nursing
              facility, hospice care, and some home health care. <br />
              1. Register your camp. ... <br />
              2. Design a camp program. ... <br />
              3. Find a location for yourcamp. ... <br />
              4. Research health and safety protocols. ... <br />
              5. Hire and train staff. ... <br />
              6. Determine a way to accept payments. ... <br />
              7. Create a frictionless registration process. <br />
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>How do I join its camp?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              In the hustle and bustle of life, it's easy to get lost in the
              complexities of health insurance, especially when it comes to
              Medicare. In the hustle and bustle of life, it's easy to get lost
              in the complexities of health insurance, especially when it comes
              to Medicare. it's easy to get lost in the complexities of health
              insurance, especially when it comes to Medicare.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  MediCare Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  All Camps
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default PeopleAsk;
