import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [arrayCountries, setArrayCountry] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('searchQuery');

    if (!region) {
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchByRegion(region);
        setArrayCountry(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading> {error.message}</Heading>}
        <SearchForm seacrh={setSearchParams} />
        <CountryList countries={arrayCountries} />
      </Container>
    </Section>
  );
};
