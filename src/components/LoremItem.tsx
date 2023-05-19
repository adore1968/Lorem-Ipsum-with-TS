type Props = { value: string };

function LoremItem({ value }: Props) {
  return (
    <div className="mb-5">
      <p className="text-lg sm:text-xl">{value}</p>
    </div>
  );
}

export default LoremItem;
