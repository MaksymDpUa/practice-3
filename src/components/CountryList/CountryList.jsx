import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(countrie => (
        <GridItem key={countrie.country}>
          <Link to={`/country/${countrie.id}`} state={{from: location}}>
            <img src={countrie.flag} alt={countrie.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
