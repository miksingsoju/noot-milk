import { useState } from 'react'

import Title from '../components/Title'
import Label from '../components/Label'
import Add from '../assets/add_circle.svg'


function Calculator() {
  const [courses, setCourses] = useState([
    { courseCode: '', gradePoint: '', units: '' }
  ])

  const computeQPI = () => {
    let totalWeighted = 0
    let totalUnits = 0

    courses.forEach(({ gradePoint, units }) => {
      const g = parseFloat(gradePoint)
      const u = parseFloat(units)
      if (!isNaN(g) && !isNaN(u)) {
        totalWeighted += g * u
        totalUnits += u
      }
    })

    if (totalUnits === 0) return '0.00'
    return (totalWeighted / totalUnits).toFixed(2)
  }

  return (
    <>
    <body className='max-w-screen mx-auto px-5 py-10'>
      <Title name="QPI Calculator" />
      <div className='gap-5 flex flex-col md:flex-row'>
        <Courses courses={courses} setCourses={setCourses} />

        <div className='gap-5 flex flex-col flex-1'>
          <YourQPI qpi={computeQPI()} />
          <CumulativeQPI />
        </div>
      </div> 
      
    </body>
       
    </>
  )
}

function Courses({ courses, setCourses }) {
  const addCourse = () => {
    setCourses([...courses, { courseCode: '', gradePoint: '', units: '' }])
  }

  const resetCourses = () => {
    setCourses([{ courseCode: '', gradePoint: '', units: '' }])
  }

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses]
    updatedCourses[index][field] = value
    setCourses(updatedCourses)
  }

  return (
    <div className='w-full py-5 mx-0 md:mx-10 border-5 border-xl border-blue-300 rounded-xl'>
      
      <div className='flex flex-col sm:flex-row gap-2 sm:gap-5 pb-5 mx-4 md:mx-10 '>
        <button
          onClick={addCourse}
          className='flex flex-row items-center justify-center bg-blue-300 hover:bg-blue-500 text-white px-5 py-4 w-full sm:w-auto rounded-lg'
        >
          <img src={Add} className="mr-2" /> Add Course
        </button>
        <button
          onClick={resetCourses}
          className='flex flex-row items-center justify-center bg-blue-300 hover:bg-blue-500 text-white px-5 py-4 w-full sm:w-auto rounded-lg'
        >
          Reset
        </button> 
      </div>

      {/* Labels: Uses flex-1 to distribute space and shortens text for mobile */}
      <div className='mx-4 md:mx-10 flex flex-row  gap-2 md:gap-10 text-sm md:text-base font-bold text-center'>
        <Label text='Class Code' bg='blue-300' className='flex-1 hidden sm:block' />
        <Label text='Grade' bg='blue-300' className='flex-1' />
        <Label text='Units' bg='blue-300' className='flex-1' />
      </div>

      {courses.map((course, index) => (
        <Course
          key={index}
          index={index}
          data={course}
          onChange={handleCourseChange}
        />
      ))}
    </div>
  )
}

function Course({ index, data, onChange }) {
  return (
    <div className='mx-10 my-5 flex flex-row flex-wrap gap-8  '>
      <input
        name="courseCode"
        className='text-start py-1 border-2 border-green-400'
        value={data.courseCode}
        onChange={(e) => onChange(index, 'courseCode', e.target.value)}
      />
      <select
        name="gradePoint"
        className='text-left py-1 px-15 border-2 border-green-400'
        value={data.gradePoint}
        onChange={(e) => onChange(index, 'gradePoint', e.target.value)}
      >
        <option value="">-</option>
        <option value="4">A</option>
        <option value="3.5">B+</option>
        <option value="3">B</option>
        <option value="2.5">C+</option>
        <option value="2">C</option>
        <option value="1">D</option>
        <option value="0">F</option>
      </select>
      <input
        name="units"
        className='text-center py-1 border-2 border-green-400'
        value={data.units}
        onChange={(e) => onChange(index, 'units', e.target.value)}
      />
    </div>
  )
}

function YourQPI({ qpi }) {
  return (
    <div className='text-pink bold border-5 py-5 border-pink'>
      <Label text='Your QPI' bg='pink' />
      <h1>{qpi}</h1>
    </div>
  )
}

function CumulativeQPI() {
  return (
    <>
      <Label text='Cumulative QPI' bg='pink' />

        <div className='py-5 border-5 border-pink'>
        <Label text='Desired' bg='pink' />
        <h1>4.00</h1>
        </div>

      <div className='py-5 border-5 border-pink'>
        <Label text='Minimum' bg='pink' />
        <h1>4.00</h1>
      </div>


    
      <div className='py-5 border-5 border-pink'>
        <Label text='Units Left to Take' bg='pink' />
      </div>
    </>
  )
}

export default Calculator
