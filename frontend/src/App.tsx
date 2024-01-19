import { useState, FormEvent } from 'react';


const App = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const addBook = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(title, author, price, imgUrl);
    setTitle('');
    setAuthor('');
    setPrice('');
    setImgUrl('');
  };

  return (
    <main className="m-auto max-w-[1440px] min-h-screen bg-slate-400 flex flex-col text-center">
      <h1 className="text-3xl font-bold mt-16 text-white">Add A New Book</h1>
      <form onSubmit={addBook}>
        <section className="flex justify-center mt-5">
          <input
            className="rounded-md p-1 mr-5"
            type="text"
            placeholder="Book Title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            className="rounded-md p-1 mr-5"
            type="text"
            placeholder="Book Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <input
            className="rounded-md p-1 mr-5"
            type="number"
            placeholder="Book Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></input>
          <input
            className="rounded-md p-1"
            type="text"
            placeholder="Book Url (Optional)"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          ></input>
        </section>
        <section>
          <button
            type="submit"
            className="p-1 mt-4 border rounded-md bg-slate-500 text-white hover:bg-slate-700"
          >
            Add Book To List
          </button>
        </section>
      </form>
      <section>{/* <BookCard /> */}</section>
    </main>
  );
};
export default App;
