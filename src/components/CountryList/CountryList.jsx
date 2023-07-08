import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(countrie => (
        <GridItem key={countrie.country}>
          <img src={countrie.flag} alt={countrie.country} />
        </GridItem>
      ))}
    </Grid>
  );
};
