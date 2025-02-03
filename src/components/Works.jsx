import React from 'react';
import { Tilt } from 'react-tilt';
import { github } from '../../public/assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl w-full h-full flex flex-col"
    >
      <div className='relative w-full h-[230px] flex justify-evenly items-center flex-col gap-10'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        <div className='absolute inset-0 flex justify-end m-3 card-img-hover'>
          <div
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            onClick={() => window.open(source_code_link, '_blank')}
          >
            <img
              src={github}
              alt='GitHub'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-justify text-[15px]'>
          {description}
        </p>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
};

const Works = () => {
  const topProjects = projects.slice(0, 6);

  return (
    <div className='w-full' >
      <p className='text-[20px] text-secondary text-bold pt-[5%]'>Research Projects...</p>
      <h2 className='text-[25px] text-bold'>Projects</h2>

      <div className='w-full'>
        <p>
          The following projects are a product of my work experience, education, and interests.
          They reflect my ability to solve complex problems and work in teams.
        </p>
        <div className='w-full flex flex-wrap gap-4 justify-center'>
          {topProjects.map((project, index) => (
            <div className='w-full sm:w-1/2 md:w-1/2 lg:w-1/3' key={project.name}>
              <ProjectCard
                name={project.name}
                description={project.description}
                tags={project.tags}
                image={project.image}
                source_code_link={project.source_code_link}
              />
            </div>
          ))}
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          opacity: 0.3
        }}
        >
        <source src="/assets/background.mp4" type="video/mp4" />
        
      </video>
    </div>
  );
};

export default SectionWrapper(Works, '');
