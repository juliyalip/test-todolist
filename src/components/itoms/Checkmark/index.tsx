import style from './index.module.scss';

const Checkmark = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 32 32"
      className={style.icon}
    >
      <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"></path>
    </svg>
  );
};

export default Checkmark;
