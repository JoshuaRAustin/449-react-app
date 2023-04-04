
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://rkebsghtcvqjhygkhrav.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrZWJzZ2h0Y3Zxamh5Z2tocmF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MTgwNDEsImV4cCI6MTk5MzA5NDA0MX0.WGQ_s6mnouW6E9Zk4kI63iJ6D4xAKPShhWT8PSixSQ4";
export const supabase = createClient(supabaseUrl, supabaseKey)

// let { data: books, error } = await supabase
//   .from('books')
//   .select('*')

// let books_html = document.getElementById("books");
  
// for (let book of books) {
//   books_html.innerHTML += `<tr><td>${book.id}</td><td>${book.created_at}</td><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`
// }
