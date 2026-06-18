// type url = {
//     url:string
// }

/* Generics — Then We're Done With TS Basics
You need to understand generics because you'll see them constantly — useState<Type>, useRef<Type>, API response types.
One exercise:
Create src/utils/apiHelpers.ts:
Write a generic function fetchData<T>:

Takes a url: string
Returns a Promise<T> — the caller decides what type comes back
Uses async/await + try/catch
Returns the parsed JSON typed as T

typescript// Expected usage:
const posts = await fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts')
const user = await fetchData<User>('https://jsonplaceholder.typicode.com/users/1')
Also define Post and User interfaces in your Shared.ts file and use them in the function calls.
Paste apiHelpers.ts and updated Shared.ts when done. This is the last TypeScript concept — then we plan the capstone.*/
export default async function fetchData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`error ${res.status}`);
    }
    const data: T = await res.json();
    return data;
  } catch (error) {
    if (error) {
      throw error;
    }
    throw error;
  }
}
