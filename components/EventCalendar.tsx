'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'

interface Event {
  id: string
  title: string
  date: Date
  time: string
  location: string
  description: string
  isRecurring?: boolean
  recurringPattern?: string
  image?: string
}

interface EventCalendarProps {
  events: Event[]
}

export function EventCalendar({ events }: EventCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const daysInMonth = lastDayOfMonth.getDate()
  const startingDayOfWeek = firstDayOfMonth.getDay()

  const recurringDates = useMemo(() => {
    const dates: Date[] = []
    
    // Find first Sunday of the month
    let firstSunday = new Date(year, month, 1)
    const dayOfWeek = firstSunday.getDay()
    
    if (dayOfWeek !== 0) {
      const daysToAdd = 7 - dayOfWeek
      firstSunday = new Date(year, month, 1 + daysToAdd)
    }
    
    dates.push(new Date(firstSunday))
    
    // Find third Sunday (14 days after first Sunday)
    const thirdSunday = new Date(firstSunday)
    thirdSunday.setDate(thirdSunday.getDate() + 14)
    
    if (thirdSunday.getMonth() === month) {
      dates.push(new Date(thirdSunday))
    }
    
    return dates
  }, [month, year])

  const getEventsForDate = (date: Date): Event[] => {
    const dateStr = date.toDateString()
    const eventList: Event[] = []

    // Check regular events
    events.forEach(event => {
      if (event.date.toDateString() === dateStr) {
        eventList.push(event)
      }
    })

    // Check recurring events (Cygnet Market - first and third Sunday)
    if (recurringDates.some(d => d.toDateString() === dateStr)) {
      eventList.push({
        id: 'cygnet-recurring',
        title: 'Southern Cross Rangers Live - Cygnet Market',
        date: new Date(date),
        time: '10am - 2pm',
        location: 'Cygnet, Tasmania',
        description: 'We will be busking at the Cygnet Market every first and third Sunday of the month, unless otherwise stated! Bring the family, have some fun, just come along, it\'ll be a blast! We\'d love to see you there!',
        isRecurring: true,
        recurringPattern: 'First and third Sunday of the month',
        image: '/images/Cygnet Town Hall.jpg'
      })
    }

    return eventList
  }

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  const isToday = (day: number) => {
    const today = new Date()
    return day === today.getDate() && month === today.getMonth() && year === today.getFullYear()
  }

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const calendarDays = []
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarDays.push(null)
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  return (
    <div className="w-full">
      <div className="parchment-section">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={goToPreviousMonth}
            className="px-4 py-2 bg-gold text-brown rounded hover:opacity-80 transition-opacity"
          >
            ← Previous
          </button>
          <h2 className="header-1 text-2xl md:text-3xl">
            {monthNames[month]} {year}
          </h2>
          <button
            onClick={goToNextMonth}
            className="px-4 py-2 bg-gold text-brown rounded hover:opacity-80 transition-opacity"
          >
            Next →
          </button>
        </div>

        <div className="mb-4 text-center">
          <button
            onClick={goToToday}
            className="px-4 py-2 border-2 border-gold rounded hover:bg-gold/20 transition-colors"
          >
            Go to Today
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {dayNames.map(day => (
            <div key={day} className="text-center header-2 text-sm font-bold p-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => {
            if (day === null) {
              return <div key={index} className="p-2"></div>
            }

            const date = new Date(year, month, day)
            const dayEvents = getEventsForDate(date)
            const hasEvents = dayEvents.length > 0
            const today = isToday(day)

            return (
              <div
                key={day}
                onClick={() => hasEvents && setSelectedEvent(dayEvents[0])}
                className={`
                  p-2 border-2 rounded cursor-pointer transition-all
                  ${today ? 'border-gold bg-gold/20' : 'border-parchment-border'}
                  ${hasEvents ? 'hover:border-gold hover:shadow-md' : ''}
                  ${hasEvents ? 'bg-gold/10' : ''}
                `}
              >
                <div className={`text-sm mb-1 ${today ? 'font-bold text-gold' : ''}`}>
                  {day}
                </div>
                {hasEvents && (
                  <div className="flex flex-wrap gap-1">
                    {dayEvents.map(event => (
                      <div
                        key={event.id}
                        className="w-2 h-2 bg-gold rounded-full"
                        title={event.title}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {selectedEvent && (
          <div className="mt-6 p-4 bg-parchment-dark rounded-lg border-2 border-gold">
            <div className="flex justify-between items-start mb-2">
              <h3 className="header-1 text-xl">{selectedEvent.title}</h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-2xl hover:text-gold transition-colors"
              >
                ×
              </button>
            </div>
            <p className="body-text text-sm mb-2">
              📅 {selectedEvent.date.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="body-text text-sm mb-2">🕐 {selectedEvent.time}</p>
            <p className="body-text text-sm mb-2">📍 {selectedEvent.location}</p>
            {selectedEvent.isRecurring && (
              <p className="body-text text-xs text-gold mb-2">
                🔄 {selectedEvent.recurringPattern}
              </p>
            )}
            <p className="body-text text-sm">{selectedEvent.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

