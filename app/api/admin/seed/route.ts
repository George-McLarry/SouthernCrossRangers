import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function POST() {
  try {
    const supabase = createAdminClient()

    // Create content_sections table if it doesn't exist
    const { error: sectionsError } = await supabase.rpc('create_content_sections_table')
    if (sectionsError && !sectionsError.message.includes('already exists')) {
      console.error('Error creating content_sections table:', sectionsError)
    }

    // Create music_tracks table if it doesn't exist
    const { error: tracksError } = await supabase.rpc('create_music_tracks_table')
    if (tracksError && !tracksError.message.includes('already exists')) {
      console.error('Error creating music_tracks table:', tracksError)
    }

    // Seed content sections
    const contentSections = [
      {
        section_name: 'hero_title',
        content: 'Southern Cross Rangers'
      },
      {
        section_name: 'hero_tagline',
        content: 'Authentic Country Music from Tasmania'
      },
      {
        section_name: 'hero_text',
        content: 'Experience the raw beauty of Tasmanian landscapes through our music. Every song tells a story of the land, the people, and the spirit that makes Tasmania special.'
      },
      {
        section_name: 'about_text',
        content: 'Southern Cross Rangers is a country music band from the heart of Tasmania, bringing you stories of the land, its people, and the spirit of the bush. Our music is a blend of traditional country sounds with a modern twist, reflecting the rugged beauty and unique character of our home.'
      }
    ]

    for (const section of contentSections) {
      const { error } = await supabase
        .from('content_sections')
        .upsert(section, { onConflict: 'section_name' })
      
      if (error) {
        console.error(`Error seeding ${section.section_name}:`, error)
      }
    }

    // Seed sample music tracks
    const musicTracks = [
      {
        title: 'The One You Need',
        artist: 'Southern Cross Rangers',
        url: '/audio/The One You Need.wav',
        description: 'Our signature track that captures the essence of Tasmanian country music.'
      },
      {
        title: 'Being Near Is Better',
        artist: 'Southern Cross Rangers',
        url: '/audio/Being Near Is Better.wav',
        description: 'A heartfelt ballad about the importance of family and home.'
      }
    ]

    for (const track of musicTracks) {
      const { error } = await supabase
        .from('music_tracks')
        .upsert(track, { onConflict: 'title,artist' })
      
      if (error) {
        console.error(`Error seeding track ${track.title}:`, error)
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Database seeded successfully' 
    })
  } catch (error) {
    console.error('Error seeding database:', error)
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    )
  }
}


