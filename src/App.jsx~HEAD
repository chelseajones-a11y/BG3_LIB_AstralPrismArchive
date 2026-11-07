import React, { useState } from 'react';
import { archiveCatalog } from './data/archiveCatalog.js';

export default function App() {
  const [search, setSearch] = useState('');
  const [collection, setCollection] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filtered = archiveCatalog.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCollection = collection === 'All' || item.collection === collection;
    return matchesSearch && matchesCollection;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Astral Prism Archive</h1>
      <p>Total Lore Entries: {archiveCatalog.length}</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <input 
          type="text" 
          placeholder="Search audio titles..." 
          value={search}
          onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
          style={{ flex: 1, padding: '0.5rem' }}
        />
        <select 
          value={collection} 
          onChange={(e) => { setCollection(e.target.value); setCurrentPage(1); }}
          style={{ padding: '0.5rem' }}
        >
          <option value="All">All Collections</option>
          <option value="BB Audio">BB Audio</option>
          <option value="BoH Audio">BoH Audio</option>
          <option value="General">General</option>
        </select>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {paginated.map(item => (
          <li key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '1rem 0' }}>
            <strong>{item.title}</strong> <small>({item.collection})</small>
            <div style={{ marginTop: '0.5rem' }}>
              <audio controls src={item.audioSrc} style={{ width: '100%' }} />
            </div>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>Next</button>
        </div>
      )}
    </div>
  );
}
