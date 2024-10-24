'use client'
import Courses from '@/components/Courses'
import React, { useEffect, useState } from 'react'


export default function CoursesPage() {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const fetchCourses = async () => {
            const res = await fetch(`/api/courses/`)
            const data = await res.json()
            setCourses(data)
            setLoading(false)
        }
        fetchCourses()
    }, [])

    if(loading) {
        return <div>Loading...</div>
    }

    return <div>
        <h1 className='text-2x1 font-bold'>Courses</h1>
        <Courses courses={courses} />
    </div>
}
