import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase'

export async function GET() {
  try {
    const supabase = createAdminClient()
    
    // Test content_sections table
    const { data: sections, error: sectionsError } = await supabase
      .from('content_sections')
      .select('*')
      .limit(1)
    
    if (sectionsError) {
      return NextResponse.json({ 
        error: 'Content sections error', 
        details: sectionsError.message 
      }, { status: 500 })
    }
    
    // Test music_tracks table
    const { data: tracks, error: tracksError } = await supabase
      .from('music_tracks')
      .select('*')
      .limit(1)
    
    if (tracksError) {
      return NextResponse.json({ 
        error: 'Music tracks error', 
        details: tracksError.message 
      }, { status: 500 })
    }
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database connection successful',
      sections: sections?.length || 0,
      tracks: tracks?.length || 0
    })
  } catch (error: any) {
    return NextResponse.json({ 
      error: 'Database test failed', 
      details: error.message 
    }, { status: 500 })
  }
}


