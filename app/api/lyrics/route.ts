import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const lyricsDir = path.join(process.cwd(), 'public', 'lyrics')
    
    if (!fs.existsSync(lyricsDir)) {
      return NextResponse.json({ lyrics: [] })
    }

    const files = fs.readdirSync(lyricsDir)
    
    const pdfFiles = files
      .filter(file => file.toLowerCase().endsWith('.pdf'))
      .sort((a, b) => a.localeCompare(b))
      .map(file => ({
        filename: file,
        name: file.replace('.pdf', '').trim(),
        url: `/lyrics/${encodeURIComponent(file)}`
      }))

    return NextResponse.json({ lyrics: pdfFiles })
  } catch (error) {
    console.error('Error reading lyrics directory:', error)
    return NextResponse.json({ lyrics: [] }, { status: 500 })
  }
}

