import React, { useState } from "react";
import * as R from "ramda";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Country } from "@generated/graphql";
import {
  Wrapper,
  Container,
  Inner,
  DropdownButton,
  CountryImage,
  CountryWrapper,
} from "./CountrySelectStyle";
import { useCountries } from "./CountrySelectUtils";

library.add(faAngleDown, faAngleUp);

interface Props {
  value: Country;
  onChange(value: Country): void;
  color: "background" | "backgroundDarken";
}

const CountrySelect: React.FC<Props> = ({ color, value, onChange }) => {
  const countries = useCountries();
  const [showFull, setShowFull] = useState<boolean>(false);
  const toggleShowFull = () => setShowFull(!showFull);

  const toCountryButtons = (country: Country) => {
    const title = countries[country];

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      toggleShowFull();
      onChange(country);
    };

    return (
      <CountryWrapper onClick={handleClick} key={country} title={title}>
        <CountryImage
          src={require(`@assets/images/countries/${country}.png`)}
          alt={title}
        />
        <span>{title}</span>
      </CountryWrapper>
    );
  };

  const countrySelectedFirst = Object.keys(countries).sort((x, y) => {
    if (x === value) {
      return -1;
    }

    return y === value ? 1 : 0;
  });

  const countryButtons = R.map(toCountryButtons, countrySelectedFirst);

  return (
    <Wrapper>
      <Container showFull={showFull} color={color}>
        <Inner>{countryButtons}</Inner>
        <DropdownButton onClick={toggleShowFull} type="button">
          <FontAwesomeIcon icon={showFull ? faAngleUp : faAngleDown} />
        </DropdownButton>
      </Container>
    </Wrapper>
  );
};

export default CountrySelect;
