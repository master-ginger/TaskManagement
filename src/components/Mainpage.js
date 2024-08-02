import '../App.css';
import { Fade } from 'react-awesome-reveal';
import Board from '@asseinfo/react-kanban'
import '@asseinfo/react-kanban/dist/styles.css';
import { Calendar,momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React,{useState} from 'react';
import Task from './Task';

export default function Mainpage(){
    const localizer=momentLocalizer(moment);
    const [events, setEvents] = useState([
        {
          title: 'Meeting',
          start: new Date(),
          end: new Date(moment().add(1, 'hour').toDate()),
          allDay: false,
        },
      ]);
    
      const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
    
      const handleAddEvent = () => {
        setEvents([...events, { ...newEvent, start: new Date(newEvent.start), end: new Date(newEvent.end) }]);
        setNewEvent({ title: '', start: '', end: '' });
      };
    const board = {
        columns: [
          {
            id: 1,
            title: 'Backlog',
            cards: [
              {
                id: 1,
                title: 'Project Research',
                description: 'Add capability to add a card in a column'
              },
            ]
          },
          {
            id: 2,
            title: 'Doing',
            cards: [
              {
                id: 2,
                title: 'Project Design',
                description: 'Move a card between the columns'
              },
            ]
          },
          {
            id: 3,
            title: 'Reviewing',
            cards: [
              {
                id: 8,
                title: 'Project Design',
                description: 'Move a card between the columns'
              },
            ]
          },
          {
            id: 4,
            title: 'Done',
            cards: [
              {
                id: 3,
                title: 'Exam prep',
                description: 'Move a card between the columns'
              },
              {
                id: 4,
                title: 'Walking',
                description: 'Move a card between the columns'
              },
            ]
          }
        ]
      }
    return(
        <div className='bg-black'>
           <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-800 bg-[length:200%_200%] animate-gradient  lg:h-[600px] text-center lg:text-5xl font-bold font-roboto tracking-wider lg:pt-[150px] slide-in-left">
            <blockquote className="italic">
            "The secret of getting ahead is getting started." - <br/>Mark Twain
            </blockquote><br></br>
            <blockquote>
            Your journey to productivity starts here.
            </blockquote>
           <br/><br/>
           </div><br/><br/><br/><br/>
           <div className='text-roboto text-center text-4xl text-white'>
           <Fade direction='down' delay={500} duration={1200}>KanBan Task Board</Fade>
           </div><br/>
              <div className='flex justify-center'>
              <div id="task">
                    <Board
                        allowRemoveLane
                        allowRenameColumn
                        allowRemoveCard
                        onLaneRemove={console.log}
                        onCardRemove={console.log}
                        onLaneRename={console.log}
                        initialBoard={board}
                        allowAddCard={{ on: "top" }}
                        onNewCardConfirm={(draftCard) => ({
                        id: new Date().getTime(),
                        ...draftCard
                    })}
                    onCardNew={console.log}/>
                </div>
        </div><br/><br/>
        <div className='text-center text-4xl font-roboto text-white'><Fade direction='down' delay={500} duration={1200}>Plan Your Day, Achieve Your Goals</Fade></div><br/><br/>
        <div className="add-event-form mx-44">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="datetime-local"
          placeholder="Start Date"
          value={newEvent.start}
          onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
        />
       
        <button onClick={handleAddEvent}>Add Event</button>
      </div>    
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{height:500 }}
            className='mx-44 bg-white'/><br/>
            <br/>
            <div className='text-white'>
                <Task/>
            </div>
            <br/>
        </div>

    )
}