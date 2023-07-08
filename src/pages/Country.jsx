import { Section, Container, CountryInfo, Loader } from 'components';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { countryId } = useParams();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const respons = await fetchCountry(countryId);
        console.log(respons);
        setCountry(respons);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [countryId]);

  //const { flag, capital, countryName, id, languages, population } = country;

  return (
    <Section>
      <Container>
        <Link to={location.state?.from ?? '/'}>Go Back</Link>
        {error && <div>{error}</div>}
        {country && (
          <CountryInfo
            flag={country.flag}
            capital={country.capital}
            country={country.countryName}
            id={country.id}
            languages={country.languages}
            population={country.population}
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
