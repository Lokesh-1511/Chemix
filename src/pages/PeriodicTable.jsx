import React, { useMemo, useRef, useState } from 'react';
import { periodicElements, tableConfig } from '../data/periodicTableData';
import '../styles/PeriodicTable.css';

const PeriodicTable = () => {
  const [selected, setSelected] = useState(null);
  const lnRef = useRef(null);
  const anRef = useRef(null);

  // Build a 2D map: period x group -> element
  const gridMap = useMemo(() => {
    const map = new Map();
    periodicElements.forEach(el => {
      const key = `${el.period}-${el.group}`;
      map.set(key, el);
    });
    return map;
  }, []);

  const openInfo = (el) => setSelected(el);
  const closeInfo = () => setSelected(null);

  // Split f-block for separate rendering
  const lanthanides = periodicElements.filter(e => e.category === 'lanthanide');
  const actinides   = periodicElements.filter(e => e.category === 'actinide');

  return (
    <div className="pt-page">
      <div className="pt-container">
      <header className="pt-header">
        <h1>Interactive Periodic Table</h1>
        <p>Click an element to see details like name, symbol, atomic number, and uses.</p>
      </header>

      <div className="pt-grid" style={{
        gridTemplateColumns: `repeat(${tableConfig.groups}, var(--pt-cell))`,
        gridTemplateRows: `repeat(${tableConfig.periods}, var(--pt-cell))`
      }}>
        {
          Array.from({ length: tableConfig.periods }).map((_, rowIdx) =>
            Array.from({ length: tableConfig.groups }).map((_, colIdx) => {
              const period = rowIdx + 1;
              const group = colIdx + 1;
              const el = gridMap.get(`${period}-${group}`);
              const show = el && el.category !== 'lanthanide' && el.category !== 'actinide';
              return (
                <div key={`${period}-${group}`} className={`pt-cell ${show ? 'has-el' : 'empty'}`}>
                  {show && (
                    <button
                      className={`pt-tile cat-${(el.category || '').replace(/\s+/g, '-')}`}
                      title={`${el.name} (${el.symbol})`}
                      onClick={() => openInfo(el)}
                    >
                      <span className="pt-atomic">{el.atomicNumber}</span>
                      <span className="pt-symbol">{el.symbol}</span>
                    </button>
                  )}
                  {!show && period === 6 && group === 3 && (
                    <button
                      className="pt-tile pt-placeholder"
                      title="Lanthanides (57–71)"
                      onClick={() => lnRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    >
                      <span className="pt-atomic">57–71</span>
                      <span className="pt-symbol">Ln</span>
                    </button>
                  )}
                  {!show && period === 7 && group === 3 && (
                    <button
                      className="pt-tile pt-placeholder"
                      title="Actinides (89–103)"
                      onClick={() => anRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    >
                      <span className="pt-atomic">89–103</span>
                      <span className="pt-symbol">An</span>
                    </button>
                  )}
                </div>
              );
            })
          )
        }
      </div>

      <div className="pt-legend">
        <span className="legend-item cat-alkali-metal">Alkali</span>
        <span className="legend-item cat-alkaline-earth-metal">Alkaline Earth</span>
        <span className="legend-item cat-transition-metal">Transition</span>
        <span className="legend-item cat-post-transition-metal">Post‑Transition</span>
        <span className="legend-item cat-metalloid">Metalloid</span>
        <span className="legend-item cat-nonmetal">Nonmetal</span>
        <span className="legend-item cat-halogen">Halogen</span>
        <span className="legend-item cat-noble-gas">Noble Gas</span>
        <span className="legend-item cat-lanthanide">Lanthanide</span>
        <span className="legend-item cat-actinide">Actinide</span>
      </div>

      <section className="pt-fblock">
        <h3 ref={lnRef}>Lanthanides</h3>
        <div className="pt-row">
          {lanthanides.map(el => (
            <button key={el.atomicNumber} className={`pt-tile cat-${(el.category || '').replace(/\s+/g, '-')}`} onClick={() => openInfo(el)}>
              <span className="pt-atomic">{el.atomicNumber}</span>
              <span className="pt-symbol">{el.symbol}</span>
            </button>
          ))}
        </div>
        <h3 ref={anRef}>Actinides</h3>
        <div className="pt-row">
          {actinides.map(el => (
            <button key={el.atomicNumber} className={`pt-tile cat-${(el.category || '').replace(/\s+/g, '-')}`} onClick={() => openInfo(el)}>
              <span className="pt-atomic">{el.atomicNumber}</span>
              <span className="pt-symbol">{el.symbol}</span>
            </button>
          ))}
        </div>
      </section>

      </div>

      {selected && (
        <div className="pt-modal" role="dialog" aria-modal="true" onClick={closeInfo}>
          <div className="pt-card" onClick={(e) => e.stopPropagation()}>
            <div className={`pt-card-banner cat-${(selected.category || '').replace(/\s+/g, '-')}`}></div>
            <div className="pt-card-body">
              <div className="pt-card-header">
                <div className="pt-card-symbol">{selected.symbol}</div>
                <div className="pt-card-title">
                  <div className="pt-card-name">{selected.name}</div>
                  <div className="pt-card-atomic">Atomic Number: {selected.atomicNumber}</div>
                </div>
              </div>
              <div className="pt-card-uses">
                <strong>Uses:</strong> {selected.uses || '—'}
              </div>
            </div>
            <div className="pt-card-actions">
              <button onClick={closeInfo} className="pt-close">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeriodicTable;
