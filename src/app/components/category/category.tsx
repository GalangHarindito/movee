import { Typocustome, WrapperGenre } from "@style/global/global";

type Category = {
  id: number;
  name: string;
};

type Props = {
  movieCategory: number[];
  category: Category[];
};

const Category = ({ movieCategory, category }: Props) => {
  const nameCategory = (val: number) => {
    const filter = category.filter((elem: any) => elem.id === val);
    return filter[0].name;
  };

  return (
    <>
      {movieCategory &&
        movieCategory.map((item: number) => {
          return (
            <WrapperGenre>
              <Typocustome color="white" size="0.7rem">
                {nameCategory(item)}
              </Typocustome>
            </WrapperGenre>
          );
        })}
    </>
  );
};

export default Category;
