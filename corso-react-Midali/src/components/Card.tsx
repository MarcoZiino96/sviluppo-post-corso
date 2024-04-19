type CardProps = {
  title: string;
  img: string;
};

function Card({ title, img }: CardProps) {
  const description: string =
    "lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit";
  return (
    <div className=" text-center my-5">
      <img className="h-32 w-32 m-auto" src={img} alt="" />
      <div className="w-auto">
        <div className="bg-blue-50">
          <h2 className="text-2xl text-black font-bold">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
