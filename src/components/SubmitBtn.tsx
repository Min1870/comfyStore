interface SubmitBtnProps {
  text: string;
}

const SubmitBtn = ({ text }: SubmitBtnProps) => {
  return (
    <button type="submit" className="btn btn-primary btn-block">
      {text}
    </button>
  );
};

export default SubmitBtn;
