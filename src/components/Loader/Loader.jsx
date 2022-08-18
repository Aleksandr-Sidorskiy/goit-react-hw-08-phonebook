
import css from './Loader.module.css';

function Loader() {
  return (
    
    <div className={css.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    
  );
}

export default Loader;
