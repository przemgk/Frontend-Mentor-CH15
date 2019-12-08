import React from 'react';
import MenuBarTemplate from 'templates/MenuBarTemplate';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import Button from 'components/atoms/Button/Button';
import FlagBox from 'components/atoms/FlagBox/FlagBox';
import Heading from 'components/atoms/Heading/Heading';
import DataSet from 'components/molecules/DataSet/DataSet';

const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.elementBgColor};
`;

const StyledBar = styled.div`
  width: 100%;
  padding: 40px 10% 72px;
`;

const StyledInner = styled.div`
  width: 100%;
  min-height: 320px;
  padding: 0 10%;
  display: grid;
  grid-gap: 120px;
  grid-template-columns: 1fr 1fr;
`;

const StyledDataWrapper = styled.div`
  padding: 40px 0;
`;

const StyledEssentialData = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px 24px;
  grid-auto-flow: column;
  margin: 32px 0 56px;
`;

const DetailsTemplate = ({
  url,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
  theme: { icons }
}) => {
  return (
    <StyledWrapper>
      <MenuBarTemplate>
        <StyledBar>
          <Button as={Link} to={routes.home} icon={icons.arrow}>
            Back
          </Button>
        </StyledBar>
        <StyledInner>
          <FlagBox url={url} />
          <StyledDataWrapper>
            <Heading as="h2" large>
              Belgium
            </Heading>
            <StyledEssentialData>
              <DataSet type="text" label="Native name" value={nativeName} />
              <DataSet type="text" label="Population" value={population} />
              <DataSet type="text" label="Region" value={region} />
              <DataSet type="text" label="Sub region" value={subRegion} />
              <DataSet type="text" label="Capital" value={capital} />
              <DataSet type="text" label="Top level domain" value={topLevelDomain} />
              <DataSet type="text" label="Currencies" value={currencies} />
              <DataSet type="text" label="Languages" value={languages} />
            </StyledEssentialData>
            <DataSet type="buttons" label="Border countries" value={borderCountries} />
          </StyledDataWrapper>
        </StyledInner>
      </MenuBarTemplate>
    </StyledWrapper>
  );
};

DetailsTemplate.propTypes = {
  url: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  subRegion: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  topLevelDomain: PropTypes.string.isRequired,
  currencies: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  borderCountries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  theme: PropTypes.shape({
    icons: PropTypes.objectOf(PropTypes.string).isRequired
  }).isRequired
};

export default withTheme(DetailsTemplate);