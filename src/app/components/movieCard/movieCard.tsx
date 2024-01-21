'use client'

import Image from "next/image";
import {
  Card,
  ImagePoster,
  WrapperContent,
  WrapperDescription,
  Title,
  WrapperTitleHide,
  TitleHide,
  DescriptionYear,
  WrapperCategory,
  WrapperCast
} from "./style";
import { MovieProps } from "@helpers/typeData";
import {
  Typocustome,
  WrapperYear,
  WrapperLanguage,
} from "@style/global/global";
import { defineYear, defineLanguage, truncateText } from "@helpers/helper";
import Category from "components/category/category";
import Button from "components/button/button";


type CategoryType = {
  id: number;
  name: string;
};

type Props = {
  movies: MovieProps;
  category: CategoryType[];
};

const MovieCard = async ({ movies, category }: Props) => {

  return (
    <Card>
      <WrapperContent>
        <ImagePoster>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            alt="Picture of movie"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </ImagePoster>

        <WrapperDescription>
          <Title>
            <WrapperYear>
              <Typocustome color="white" size="0.7rem">
                {defineYear(movies.release_date)}
              </Typocustome>
            </WrapperYear>
            <WrapperLanguage>
              <Typocustome color="white" size="0.7rem">
                {defineLanguage(movies.original_language)}
              </Typocustome>
            </WrapperLanguage>
          </Title>
          <WrapperTitleHide>
            <TitleHide>
              <Typocustome color="white" size="1.2rem">
                <b>{movies.title}</b>
              </Typocustome>
            </TitleHide>
            <DescriptionYear>
              <WrapperYear>
                <Typocustome color="white" size="0.7rem">
                  {defineYear(movies.release_date)}
                </Typocustome>
              </WrapperYear>
              <WrapperLanguage>
                <Typocustome color="white" size="0.7rem">
                  {defineLanguage(movies.original_language)}
                </Typocustome>
              </WrapperLanguage>
            </DescriptionYear>
            <WrapperCategory>
              <Category movieCategory={movies.genre_ids} category={category} />
            </WrapperCategory>
            <WrapperCast>
              <Typocustome size="0.9rem" color='white'>Overview</Typocustome>
              <Typocustome color="white" size="0.75rem">"{truncateText(movies.overview)}"</Typocustome>
              <br />
              <Button label={'See Details'} type={'button'} onClick={() => console.log('test')} />
            </WrapperCast>
           
          </WrapperTitleHide>
        </WrapperDescription>
      </WrapperContent>
    </Card>
  );
};

export default MovieCard;
