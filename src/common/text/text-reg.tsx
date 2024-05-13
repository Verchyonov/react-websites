export const TextReg = (props: any) => {
  return (
    <p className={"text-3xl text-center " + props.customClass}>{props.text}</p>
  );
};
