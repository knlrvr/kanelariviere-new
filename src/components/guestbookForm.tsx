'use client'
import React, { useState } from 'react'
import { Reveal } from '@/components/utils/reveal'

import { useMutation, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api'

import { SignInButton, SignOutButton, useUser } from '@clerk/clerk-react'

const GuestbookForm = () => {
  const [text, setText] = useState("");
  const createNote = useMutation(api.notes.createNote); 
  const notes = useQuery(api.notes.getNotes); 

  const { user } = useUser();

  return (
    <div className="pb-8 pt-6 md:pt-20 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Reveal>
          <span className="intro-text font-migra">Guestbook</span>
        </Reveal>
        <Reveal>
          <p className="intro-about font-light text-center max-w-3xl mx-auto font-mont px-6 text-base md:text-lg lg:text-xl text-neutral-500">Sign in to sign my guestbook!</p>
        </Reveal>
        {!user && (
          <Reveal>
            <div className="mt-4 container p-1 px-4 rounded-full shadow-md">
              <SignInButton mode='modal' afterSignInUrl='/guestbook'/>
            </div>
          </Reveal>
        )}
      </div>

      {user && (
        <Reveal>
          <div>
            <form 
              onSubmit={e => {
                e.preventDefault();
                createNote({
                  // oops
                  body: text,
                  author: user?.fullName || user?.username || '',
                });
                setText('')
              }}
              className="w-full md:w-1/2 mt-4 flex py-2"
            >

              <input 
                value={text} 
                onChange={e => setText(e.target.value)}
                className="container bg-transparent rounded-full w-full placeholder:text-neutral-500 mr-3 ml-1 px-4 py-2"
                required
                placeholder='Leave a message here!'
              />
              <button
                className="px-6 uppercase py-1.5 rounded-full container w-20 flex justify-center items-center font-light text-sm">sign</button>
            </form>
            <div className="ml-4 text-xs">
              <SignOutButton />
            </div>
          </div>
        </Reveal>
      )}
      
      <Reveal>
        <div className="py-16 text-sm">
          {notes?.map(note => {

            const creationTimeMs = note._creationTime;
            const date = new Date(creationTimeMs);

            const options: Intl.DateTimeFormatOptions = {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }

            const formattedDate = date.toLocaleDateString('en-US', options);

            return <div key={note._id} className="flex flex-col py-2">
              <span>{note.body}</span> 
              <div className="flex items-center text-xs">
                <span className="text-neutral-500">{note.author} &mdash;</span>
                <span className="text-neutral-500">&nbsp;{formattedDate}</span>
              </div>
            </div>
          })}
        </div>
      </Reveal>

    </div>
  )
}

export default GuestbookForm