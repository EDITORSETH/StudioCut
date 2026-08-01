import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://kfngvzyohlproarrvnqj.supabase.co"

const supabaseKey = "sb_publishable_U240imQIxnO44Tn2YoAqeA_maGBW_cU"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)