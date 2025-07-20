import { useState } from "react"

export function useCourseDetails() {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'qa'>('overview')
  const [showAllSkills, setShowAllSkills] = useState(false)

  const learningPoints = [
    "Gain an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job",
    "Learn key analytical skills (data cleaning, analysis, & visualization) and tools (spreadsheets, SQL, R programming, Tableau)",
    "Understand how to clean and organize data for analysis, and complete analysis and calculations using spreadsheets, SQL and R programming",
    "Learn how to visualize and present data findings in dashboards, presentations and commonly used visualization platforms"
  ]

  const skills = [
    "Tableau Software", "Data Analysis", "SQL Programming", 
    "R Programming", "Data Visualization", "Spreadsheets",
    "Data Cleaning", "Statistical Analysis", "Business Intelligence",
    "Dashboard Design", "Data Mining", "Python Programming",
    "Machine Learning", "Database Management"
  ]

  const courseStats = [
    {
      title: "9 course series",
      subtitle: "Earn a career credential that demonstrates your expertise"
    },
    {
      title: "Beginner Level",
      subtitle: "No prior experience required",
      badge: true
    },
    {
      title: "4.8 Rating",
      subtitle: "(24,000 reviews)"
    },
    {
      title: "Flexible schedule",
      subtitle: "6 months, 10 hours a week\nLearn at your own pace"
    }
  ]

  const handleTabChange = (tab: 'overview' | 'courses' | 'qa') => {
    setActiveTab(tab)
  }

  const handleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills)
  }

  const visibleSkills = showAllSkills ? skills : skills.slice(0, 8)

  return {
    learningPoints,
    skills,
    courseStats,
    activeTab,
    handleTabChange,
    visibleSkills,
    showAllSkills,
    handleShowAllSkills
  }
}
