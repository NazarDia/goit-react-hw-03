import style from './SearchBox.module.css';

export const SearchBox = ({ onSearchChange }) => {
  return (
    <div className={style.containerInput}>
      <p>Find contacts by name</p>
      <input
        className={style.searchInput}
        type="text"
        onChange={e => onSearchChange(e.target.value)}
      />
    </div>
  );
};
