import React from 'react'

import GuestbookForm from '@/components/guestbookForm'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kane Lariviere | Guestbook',
  description: 'Guestbook | Kane Lariviere • Software Engineer. Full Stack Developer. Designer.',
}

const Guestbook = () => {
  return (
    <GuestbookForm />
  )
}

export default Guestbook