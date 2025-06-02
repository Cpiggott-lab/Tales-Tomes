
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import "./My-library.style.css";
import { useBooksService } from "../../services/useBooksService";

function BookCard({ book, from }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: book.id,
    data: { book, from },
  });

 
  let style;
  if (transform) {
    style = {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
    };
  }

 
  let imageUrl = "";
  if (book.cover_i) {
    imageUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
  }

  return (
    <div
      ref={setNodeRef}
      className="book-card"
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="book-card-image-wrapper">
        <img src={imageUrl} alt={book.title} className="book-card-image" />
      </div>
      <div className="book-card-text">
        <h1 className="book-card-title">{book.title}</h1>
        <p className="book-card-author">
          {book.author_name && book.author_name[0]}
        </p>
      </div>
    </div>
  );
}

function LibraryColumn({ id, title, books, className }) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className={`${className}-container`}>
      <h1 className={`${className}-title`}>{title}</h1>
      <div className={`${className}-list`}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} from={id} />
        ))}
      </div>
    </div>
  );
}

export default function MyLibraryPage() {
  const { getBooks, postBooks, deleteBooks } = useBooksService();

 
  const [owned, setOwned] = useState([]);
  const [reading, setReading] = useState([]);
  const [finished, setFinished] = useState([]);

 
  useEffect(() => {
    const load = async () => {
     
      const loadList = async (path, setter) => {
        await getBooks(path);
        const res = await fetch(
          `https://tales-tomes-production.up.railway.app${path}`
        );
        const data = await res.json();
        setter(data);
      };

      await loadList("/owned", setOwned);
      await loadList("/reading", setReading);
      await loadList("/finished", setFinished);
    };

    load();
  }, []);

 
  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeData = active.data.current;
    if (!activeData || activeData.from === over.id) return;

    const book = activeData.book;
    const from = activeData.from;
    const to = over.id;

    try {
     
      const addEndpoint = `/${to}`;
      const removeEndpoint = `/${from}/${book.id}`;

      await postBooks(addEndpoint, book);
      await deleteBooks(removeEndpoint);

     
      const removeFrom = (list, id) => {
        const updatedList = list.filter((b) => {
          return b.id !== id;
        });
        return updatedList;
      };

      if (from === "owned") {
        setOwned((previousList) => {
          return removeFrom(previousList, book.id);
        });
      }

      if (from === "reading") {
        setReading((previousList) => {
          return removeFrom(previousList, book.id);
        });
      }

      if (from === "finished") {
        setFinished((previousList) => {
          return removeFrom(previousList, book.id);
        });
      }

     
      const addTo = (list, book) => {
        const updatedList = [...list, book];
        return updatedList;
      };

      if (to === "owned") {
        setOwned((previousList) => {
          return addTo(previousList, book);
        });
      }

      if (to === "reading") {
        setReading((previousList) => {
          return addTo(previousList, book);
        });
      }

      if (to === "finished") {
        setFinished((previousList) => {
          return addTo(previousList, book);
        });
      }
    } catch (err) {
      console.error("Failed to move book:", err);
    }
  };

  return (
    <div className="library-catalog">
      <h1 className="my-library-title">My Library</h1>
      <p className="my-library-sub-header">
        A book is a gift you can open again and again. -Garrison Keillor
      </p>

      {}
      <DndContext onDragEnd={handleDragEnd}>
        <div className="library-catalog-container">
          <LibraryColumn
            id="owned"
            title="Owned"
            books={owned}
            className="owned"
          />
          <LibraryColumn
            id="reading"
            title="Reading"
            books={reading}
            className="reading"
          />
          <LibraryColumn
            id="finished"
            title="Finished"
            books={finished}
            className="finished"
          />
        </div>
      </DndContext>
    </div>
  );
}
