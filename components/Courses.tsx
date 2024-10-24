import Link from "next/link"

interface Course {
    id: string
    title: string
    description: string
    link: string
    level: string
}

interface CourseProps {
    courses: Course[]
}

const Courses: React.FC<CourseProps> = async ({courses}) => {
    return (
        <div className="grid-1">
            {
                courses.map((course: Course) => (
                    <div key={course.id}
                    className="bg-blue-200 p-4 m-4 rounded-lg">
                        <h2>{course.title}</h2>
                        <small>Level1: {course.level}</small>
                        <p className="mb-4">{course.description}</p>
                        <Link href={course.link} target="blank"
                        className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg mb-4">
                        Go To Course
                        </Link>
                    </div>

                ))
            }
        </div>
    )
}

export default Courses