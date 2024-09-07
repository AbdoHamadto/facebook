import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
  "https://uiqhymgsbqhjnlxccybv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpcWh5bWdzYnFoam5seGNjeWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNTc0MjAsImV4cCI6MjA0MDkzMzQyMH0.TtimCt6LImti0AOLkWlsqthDTPHylIYvgVFXpDDUSXA"
)