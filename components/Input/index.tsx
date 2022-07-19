type Props = {
  placeholder: string;
  label?: string;
  name: string;
};

function Input({ placeholder, label, name }: Props) {
  return (
    <div className="w-[95%] p-1">
      <label htmlFor={name} className={`${!label ? 'hidden' : 'flex'}`}>
        {label}
      </label>
      <input
        className="bg-[#111] outline-none rounded-sm px-[2px] py-1 text-white w-full m-1"
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        autoFocus
      />
    </div>
  );
}

export default Input;
