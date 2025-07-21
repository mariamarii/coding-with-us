import { Card, CardContent } from "@/components/ui/card"

interface CourseStatsProps {}

export function CourseStats({}: CourseStatsProps) {
  const courseStatsData = [
    {
      title: "9 course series",
      subtitle: "Earn a career credential that demonstrates your expertise"
    },
    {
      title: (
        <div className="flex items-start gap-2">
          <svg width="14" height="36" viewBox="0 0 12 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 33.5867H11.0424V43.4788C11.0424 46.5281 8.57048 49 5.5212 49C2.47193 49 0 46.5281 0 43.4788V33.5867Z" fill="#76B729"/>
            <path d="M0 16.7937H11.0424V32.2071H0V16.7937Z" fill="#DBDBDB"/>
            <path d="M0 5.5212C0 2.47193 2.47193 0 5.5212 0C8.57048 0 11.0424 2.47193 11.0424 5.5212V15.4134H0V5.5212Z" fill="#DBDBDB"/>
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold">Beginner</span>
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
          <span className="text-sm font-semibold">4.8</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <Card className="bg-white hidden lg:block rounded-md shadow-lg absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 py-2 w-[60%] z-10 border border-gray-200">
      <CardContent className="flex flex-col p-3 space-y-3 divide-gray-300 lg:flex-row lg:space-y-0 lg:space-x-3 lg:divide-x-1">
        {courseStatsData.map((stat, index) => (
          <Card key={index} className={`text-center pr-4 flex flex-col items-center justify-center border-none shadow-none bg-transparent ${
            index === 0 ? 'lg:flex-[0_0_28%]' : 
            index === 1 ? 'lg:flex-[0_0_20%]' : 
            index === 2 ? 'lg:flex-[0_0_18%]' : 
            'lg:flex-[0_0_28%]'
          }`}>
            <CardContent className="flex items-center justify-center gap-1 p-0 mb-1">
              {typeof stat.title === 'string' ? (
                <span className="font-semibold text-gray-900">{stat.title}</span>
              ) : (
                stat.title
              )}
            </CardContent>
            <CardContent className="p-0 text-xs text-gray-600 whitespace-pre-line">{stat.subtitle}</CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
