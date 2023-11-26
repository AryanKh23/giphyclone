// pages/index.js
import Link from 'next/link';

const Home = () => (
  <div>
    <h1>My Giphy App</h1>
    <nav>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/gallery">Gallery</Link>
    </nav>
  </div>
);

export default Home;
