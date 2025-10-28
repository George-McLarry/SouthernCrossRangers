import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = createAdminClient()
    
    // Check content_sections table
    const { data: sections, error: sectionsError } = await supabase
      .from('content_sections')
      .select('*')
    
    if (sectionsError) {
      return NextResponse.json({ 
        error: 'Content sections error', 
        details: sectionsError.message 
      }, { status: 500 })
    }
    
    // Check music_tracks table
    const { data: tracks, error: tracksError } = await supabase
      .from('music_tracks')
      .select('*')
    
    if (tracksError) {
      return NextResponse.json({ 
        error: 'Music tracks error', 
        details: tracksError.message 
      }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true,
      sections: sections || [],
      tracks: tracks || [],
      sectionsCount: sections?.length || 0,
      tracksCount: tracks?.length || 0
    })
  } catch (error: any) {
    return NextResponse.json({ 
      error: 'Database check failed', 
      details: error.message 
    }, { status: 500 })
  }
}


