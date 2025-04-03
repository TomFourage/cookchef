import style from './Loading.module.scss';

function Loading () {
  return (
    <div className="d-flex justify-content-center align-items-center flex-fill">
      <i className={`fa-solid fa-spinner ${style.spinner}`}></i>
    </div>
  );
}

export default Loading;