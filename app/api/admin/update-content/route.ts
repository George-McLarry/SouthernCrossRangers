import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, readFileSync } from 'fs'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const { filePath, content } = await request.json()
    
    if (!filePath || !content) {
      return NextResponse.json(
        { error: 'Missing filePath or content' },
        { status: 400 }
      )
    }

    // Get the project root directory
    const projectRoot = process.cwd()
    const fullPath = join(projectRoot, filePath)
    
    // Read the current file content
    let currentContent = ''
    try {
      currentContent = readFileSync(fullPath, 'utf8')
    } catch (error) {
      console.log('File not found, creating new file')
    }

    // Add the update to the file
    const timestamp = new Date().toISOString()
    const updateComment = `\n\n// Admin Update - ${timestamp}\n// ${content}\n`
    const updatedContent = currentContent + updateComment

    // Write the updated content back to the file
    writeFileSync(fullPath, updatedContent, 'utf8')

    console.log(`✅ Website file updated: ${filePath}`)
    console.log(`📝 Update: ${content}`)

    return NextResponse.json({ 
      success: true, 
      message: 'Website updated successfully',
      filePath,
      content 
    })
  } catch (error) {
    console.error('Error updating website file:', error)
    return NextResponse.json(
      { error: 'Failed to update website file' },
      { status: 500 }
    )
  }
}
