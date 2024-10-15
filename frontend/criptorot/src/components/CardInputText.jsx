import CopyIcon from "../assets/icons/CopyIcon";

export default function CardInputText(props) {
  const {
    title,
    placeholder,
    textButton,
    value,
    setValue,
    setAction,
    copyData,
    styleColor,
  } = props;

  const styleInput = `textarea-${styleColor}`;
  const styleButton = `btn-${styleColor}`;

  return (
    <article className='w-full min-h-52'>
      <div className='label'>
        <span className='label-text font-medium text-lg'>{title}</span>
        <div className='tooltip' data-tip='Copiar'>
          <button className='btn' onClick={copyData}>
            <CopyIcon className='size-5 text-white' />
          </button>
        </div>
      </div>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className={`textarea ${styleInput} textarea-bordered w-full min-h-52 max-h-80`}
        placeholder={placeholder}
      ></textarea>
      <div className='label flex flex-col items-end'>
        <span className='label-text-alt'>
          <button className={`btn ${styleButton} btn-sm`} onClick={setAction}>
            {textButton}
          </button>
        </span>
      </div>{" "}
    </article>
  );
}
