import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zqqcwuxpkpyushoxzsha.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxcWN3dXhwa3B5dXNob3h6c2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjYzMzAsImV4cCI6MjAyNzY0MjMzMH0.6APkrE0upj7PPo-yW63TaE41kJT_CFAzR_F7aafXkfI'
const supabase = createClient(supabaseUrl, supabaseKey)
export async function signIn(email,password){
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })
  if (error === null){
    return true
  }
  else{
    return false
  }
  
}
export async function getUserId(email){
  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    console.log(data,error)
  return data
}

export async function signUpNewUser(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  })
  if (error === null){
    return true
  }
  else{
    return false
  }
}
export async function signOut(){
  const { error } = await supabase.auth.signOut()
  if (error === null){
    return true
  }
}
export async function saveOrder(cartData,userId){
const { data, error } = await supabase
  .from('users')
  .update({ orders: cartData })
  .select('orders')
  .eq('id', userId)
  console.log(error)
return data
}
export async function getCart(userId){
  const { data, error } = await supabase
    .from('users')
    .select('orders')
    .eq('id', userId)
  return data
  }