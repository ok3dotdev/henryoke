import React, { HTMLAttributes } from "react";
export type ExperienceCardProps = {
  company: string;
  role: string;
  duties?: string;
  startDate?: string;
  endDate?: string;
  skills?: string[];
} & HTMLAttributes<HTMLDivElement>;

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  duties,
  startDate,
  endDate,
  skills,
  ...props
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between mb-12 mt-12">
      <div>
        <p className="text-[#4F4F4F] font-semibold">
          {startDate ?? 2017} - {endDate ?? 2020}
        </p>
      </div>
      <div className="max-w-xl w-full">
        <h3 className="font-bold">{company ?? "Example job title"}</h3>
        <h3 className="mb-4 font-semibold text-[#4F4F4F]">
          {role ?? "Example job title"}
        </h3>
        <p className="font-light text-[#D0CFCF] leading-7">
          {duties ?? "Example duties"}
        </p>
        <div className="flex justify-between mt-8 gap-4">
          <h3>Skills:</h3>
          <div className="flex gap-4 flex-wrap">
            {skills &&
              skills
                .sort((a: string, b: string) => a.length - b.length)
                .map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#4F4F4F] text-white rounded-md px-2 py-1"
                  >
                    {skill}
                  </span>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};
