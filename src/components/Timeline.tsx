"use client";
import ExperienceCard from './ExperienceCard';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  const { ref: lineRef, inView: lineInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const fadeInLineVariants = {
    hidden: { opacity: 0, height: "0%" },
    visible: { opacity: 1, height: "100%" },
  };

  const experiences = [
    {
      dateRange: "Sep 2020 - Dec 2024",
      title: "University of Ottawa",
      subtitle: "Bachelor of Applied Science Software Engineering",
      description: "",
    },
    {
      dateRange: "May 2024 - Aug 2024",
      title: "Comtech Telecommunications",
      subtitle: "CO-OP Cloud Engineer",
      description:
        "• Created QA environment using Terraform/Terragrunt.\n• Improved uptime through auto-scaling and AWS Fargate\n• Converted monolith to serverless microservices.",
    },
    {
      dateRange: "May 2023 - Sep 2023",
      title: "Zafin",
      subtitle: "CO-OP Software Developer",
      description:
        "• Developed NLP platform using OpenAI and Hugging Face.\n• Built microservices with Spring Boot and Flask.\n• Organized Agile rituals, improving team delivery.",
    },
    {
      dateRange: "Sep 2022 - Dec 2022",
      title: "Cision PR Newswire",
      subtitle: "CO-OP Full Stack Developer",
      description:
        "• Migrated servers to GCP, ensuring 99% uptime.\n• Built and deployed new ASP.NET features.\n• Reduced technical debt and errors.",
    },
    {
      dateRange: "Jan 2022 - May 2022",
      title: "Cision PR Newswire",
      subtitle: "CO-OP Backend Software Developer",
      description:
        "• Improved data processing by through microservices.\n• Reduced deployment errors by using CI/CD and Cucumber.\n• Dockerized microservices for Kubernetes.",
    },
  ];

  return (
    <div className="relative flex justify-center items-center min-h-screen py-12">
      <div className="w-full max-w-5xl px-4">  

        <div className="relative flex flex-col justify-center items-center" ref={lineRef}>
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#F7A650] to-[#f27705] rounded-full h-full"
            variants={fadeInLineVariants}
            initial="hidden"
            animate={lineInView ? "visible" : "hidden"}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`w-full sm:w-1/2 p-4 ${index % 2 === 0 ? "self-end" : "self-start"}`}
            >
              <ExperienceCard
                key={index}
                position={index + 1}
                dateRange={exp.dateRange}
                title={exp.title}
                subtitle={exp.subtitle}
                description={exp.description}
                isLeft={index % 2 === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
