import { CourseInfo } from "@/types/enrollment"

interface CourseDetailsProps {
  courseInfo: CourseInfo
}

export function CourseDetails({ courseInfo }: CourseDetailsProps) {
  const learningPoints = [
    "Gain an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job",
    "Learn key analytical skills (data cleaning, analysis, & visualization) and tools (spreadsheets, SQL, R programming, Tableau)",
    "Understand how to clean and organize data for analysis, and complete analysis and calculations using spreadsheets, SQL and R programming",
    "Learn how to visualize and present data findings in dashboards, presentations and commonly used visualization platforms"
  ]

  const skills = [
    "Tableau Software", "Tableau Software", "Tableau Software", 
    "Tableau Software", "Tableau Software", "Tableau Software",
    "Tableau Software", "Tableau Software", "Tableau Software",
    "Tableau Software", "Tableau Software", "Tableau Software",
    "Tableau Software", "Tableau Software"
  ]

  const courseStats = [
    {
      title: "9 course series",
      subtitle: "Earn a career credential that demonstrates your expertise"
    },
    {
      title: (
        <div className="flex items-center gap-2">
          <svg width="16" height="50" viewBox="0 0 12 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 33.5867H11.0424V43.4788C11.0424 46.5281 8.57048 49 5.5212 49C2.47193 49 0 46.5281 0 43.4788V33.5867Z" fill="#76B729"/>
            <path d="M0 16.7937H11.0424V32.2071H0V16.7937Z" fill="#DBDBDB"/>
            <path d="M0 5.5212C0 2.47193 2.47193 0 5.5212 0C8.57048 0 11.0424 2.47193 11.0424 5.5212V15.4134H0V5.5212Z" fill="#DBDBDB"/>
          </svg>
          <div className="flex flex-col">
            <span>Beginner</span>
            <span className="text-xs font-normal text-[#75757E]">Course</span>
          </div>
        </div>
      ),
      subtitle: "",
      badge: true
    },
    {
      title: (
        <div className="flex items-center gap-1">
          <span>4.8</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.7289 3.50989L15.4889 7.02989C15.7289 7.51989 16.3689 7.98989 16.9089 8.07989L20.0989 8.60989C22.1389 8.94989 22.6189 10.4299 21.1489 11.8899L18.6689 14.3699C18.2489 14.7899 18.0189 15.5999 18.1489 16.1799L18.8589 19.2499C19.4189 21.6799 18.1289 22.6199 15.9789 21.3499L12.9889 19.5799C12.4489 19.2599 11.5589 19.2599 11.0089 19.5799L8.01893 21.3499C5.87893 22.6199 4.57893 21.6699 5.13893 19.2499L5.84893 16.1799C5.97893 15.5999 5.74893 14.7899 5.32893 14.3699L2.84893 11.8899C1.38893 10.4299 1.85893 8.94989 3.89893 8.60989L7.08893 8.07989C7.61893 7.98989 8.25893 7.51989 8.49893 7.02989L10.2589 3.50989C11.2189 1.59989 12.7789 1.59989 13.7289 3.50989Z" fill="#76B729"/>
          </svg>
        </div>
      ),
      subtitle: "(24,000)"
    },
    {
      title: "Flexible schedule",
      subtitle: "6 months, 10 hours a week\nLearn at your own pace"
    }
  ]

  return (
    <div className="relative py-12 bg-white">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mx-auto w-[72%] pt-24 pb-16">
          
          {/* Course Stats */}
          <div className="bg-white rounded-md shadow-lg absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 py-4 w-[60%] z-10">
            <div className="flex flex-col space-x-4 divide-gray-300 lg:flex-row lg:divide-x-1">
              {courseStats.map((stat, index) => (
                <div key={index} className={`text-center pr-4 flex flex-col items-center justify-center ${
                  index === 0 ? 'lg:flex-[0_0_28%]' : 
                  index === 1 ? 'lg:flex-[0_0_20%]' : 
                  index === 2 ? 'lg:flex-[0_0_15%]' : 
                  'lg:flex-[0_0_28%]'
                }`}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="flex items-center text-base font-semibold text-gray-900">
                      {typeof stat.title === 'string' ? stat.title : stat.title}
                    </h3>
                    
                  </div>
                  <p className="text-xs text-gray-600 whitespace-pre-line">{stat.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="mb-8 border-b border-gray-200">
            <nav className="flex space-x-8">
              <button className="px-1 pb-4 text-sm font-medium text-[#76B729] border-b-2 border-[#76B729]">
                Overview
              </button>
              <button className="px-1 pb-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
                Courses
              </button>
              <button className="px-1 pb-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700">
                Q/A
              </button>
            </nav>
          </div>

          {/* What you will learn */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">What you will learn</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {learningPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-0.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.75 11.9999L10.58 14.8299L16.25 9.16992" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills you'll gain */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">Skills you'll gain</h2>
            <div className="flex flex-wrap gap-3">
              {skills.slice(0, 14).map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-2 text-sm font-medium text-black  rounded-4xl bg-[#D5E9BD]"
                >
                  {skill}
                </span>
              ))}
              <button className="px-3 py-2 text-sm font-medium text-[#76B729] hover:text-green-700">
                View all skills
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
