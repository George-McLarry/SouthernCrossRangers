import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Browser client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server client (for server-side operations)
export const createServerClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey)
}

// Admin client (for admin operations)
export const createAdminClient = () => {
  return createClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}


