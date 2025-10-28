import { createAdminClient } from './supabase'

// Database table types
export interface ContentSection {
  id: string
  section_name: string
  content: string
  updated_at: string
}

export interface MusicTrack {
  id: string
  title: string
  artist: string
  url: string
  description?: string
  created_at: string
}

// Database operations
export const db = {
  // Content sections
  async getContentSections() {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('content_sections')
      .select('*')
      .order('section_name')
    
    if (error) throw error
    return data as ContentSection[]
  },

  async updateContentSection(id: string, content: string) {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('content_sections')
      .update({ content, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0] as ContentSection
  },

  // Music tracks
  async getMusicTracks() {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('music_tracks')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data as MusicTrack[]
  },

  async addMusicTrack(track: Omit<MusicTrack, 'id' | 'created_at'>) {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('music_tracks')
      .insert([track])
      .select()
    
    if (error) throw error
    return data[0] as MusicTrack
  },

  async updateMusicTrack(id: string, updates: Partial<MusicTrack>) {
    const supabase = createAdminClient()
    const { data, error } = await supabase
      .from('music_tracks')
      .update(updates)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0] as MusicTrack
  },

  async deleteMusicTrack(id: string) {
    const supabase = createAdminClient()
    const { error } = await supabase
      .from('music_tracks')
      .delete()
      .eq('id', id)
    
    if (error) throw error
    return true
  }
}


