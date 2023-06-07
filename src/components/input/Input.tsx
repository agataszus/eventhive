type InputProps = {
  labelText: string;
  name: string;
};

export const Input = ({ labelText, name }: InputProps) => {
  return (
    <div>
      <label>{labelText}</label>
      <input type="string" name={name}></input>
    </div>
  );
};
