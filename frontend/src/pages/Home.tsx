import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import UserProfile from "../components/UserProfile";
import CategoryMenu from "../components/CategoryMenu";
import BookList from "../components/BookList";
import GenreScroller from "../components/GenreScroller";
import bookData from "../data/book.json";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBooks, setFilteredBooks] = useState(bookData);
  const [showSidebar, setShowSidebar] = useState(false);

  const categories = ["All", ...Array.from(new Set(bookData.map((b) => b.category)))];

  const genres = [
  { name: 'Science Fiction', image: '/images/scifi.jpg' },
  { name: 'Fantasy', image: '/images/fantasy.jpg' },
  { name: 'Romance', image: '/images/romance.jpg' },
  // etc.
];


  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredBooks(bookData);
    } else {
      setFilteredBooks(bookData.filter((book) => book.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (!user.name) navigate("/");
  }, [user]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="home-container">
      <Navbar toggleSidebar={toggleSidebar} user={user} />

      <div className="home-content flex">
        {showSidebar && (
          <aside className="sidebar w-64 bg-gray-100 p-4">
            <CategoryMenu categories={categories} onSelectCategory={setSelectedCategory} />
          </aside>
        )}
        <main className="book-list-container flex-1 px-4">
          <GenreScroller genres={genres} onSelect={setSelectedCategory} />
          <BookList books={filteredBooks} />
        </main>
      </div>
    </div>
  );
}
