import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zqqcwuxpkpyushoxzsha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcWN3dXhwa3B5dXNob3h6c2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjYzMzAsImV4cCI6MjAyNzY0MjMzMH0.6APkrE0upj7PPo-yW63TaE41kJT_CFAzR_F7aafXkfI'
const supabase = createClient(supabaseUrl, supabaseKey)
let { data, error } = await supabase
  .from('tanks')
  .select('tank_name')
console.log({data,error})
async function signIn(email,password){
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  console.log({data,error})
}
async function signUpNewUser( email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })
  console.log({data,error})
}
export async function authUser(email,password){
  let { data, error } = await supabase
  .from('users')
  .select('email')
  console.log({data,error});
  if (data.email = email){
    signIn(email,password);
  }
  else{
    signUpNewUser(email,password);
  }
}