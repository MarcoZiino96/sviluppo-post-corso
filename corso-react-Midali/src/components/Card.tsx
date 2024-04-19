type CardProps = {
  title: string;
  img: string;
  isVisited: boolean;
};

function Card({ title, img, isVisited }: CardProps) {
  const description: string =
    "lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit";
  return (
    <div className=" text-center my-5">
      <img className="w-auto h-auto m-auto" src={img} alt="" />
      <div className="w-auto">
        <div className="bg-blue-50">
          <h2 className="text-2xl text-black font-bold">{title}</h2>
          <p className="text-gray-500">{description}</p>
          {isVisited &&  <span> Visitata</span>}
          {!isVisited &&  <span> Non Visitata</span>}
        </div>
      </div>
    </div>
  );
}
export default Card;
