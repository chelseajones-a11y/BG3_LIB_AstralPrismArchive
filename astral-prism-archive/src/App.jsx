import React, { useState } from 'react';
import { archiveCatalog } from './data/archiveCatalog.js';
import { Compass, Music, Volume2, Search, Sparkles } from 'lucide-react';

export default function App() {
  const [search, setSearch] = useState('');
  const [collection, setCollection] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filtered = archiveCatalog ? archiveCatalog.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCollection = collection === 'All' || item.collection === collection;
    return matchesSearch && matchesCollection;
  }) : [];

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Compass size={32} />
        <h1>Astral Prism Archive</h1>
      </header>
      <p><Sparkles size={16} /> Total Lore Entries: {archiveCatalog ? archiveCatalog.length : 0}</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #ccc', padding: '0.5rem', borderRadius: '4px' }}>
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search audio titles..." 
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            style={{ border: 'none', outline: 'none', width: '100%' }}
          />
        </div>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Music size={16} />
              <strong>{item.title}</strong> <small>({item.collection})</small>
            </div>
            <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Volume2 size={16} />
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
