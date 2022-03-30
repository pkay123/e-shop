import styled from "styled-components";
import Featured from "../components/Featured";
import Latest from "../components/Latest";
import { mobile } from "../components/mobile";
import News from "../components/News";

const Container = styled.div`
  margin-top: 3rem;
`;

const Title = styled.h2`
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;

  @media ${mobile.sm} {
    margin-bottom: 0;
  }
`;

const SelectContainer = styled.div`
  max-width: 67rem;
  margin: auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${mobile.sm} {
    flex-direction: column;
  }
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${mobile.sm} {
    margin-top: 1rem;
  }
`;

const SelectTitle = styled.p``;

const Select = styled.select`
  padding: 0.3rem 0.3rem;
  outline: none;
  border: 1px solid #444;
  background: transparent;
  margin-left: 0.5rem;
  font-size: 0.9rem;
`;
const Option = styled.option``;

function Shop() {
  return (
    <Container>
      <Title>All Products</Title>
      <SelectContainer>
        <Filter>
          <SelectTitle>Filter By : </SelectTitle>
          <Select>
            <Option disabled selected>
              Categories
            </Option>
            <Option>Chair</Option>
            <Option>Decor</Option>
            <Option>Lighting</Option>
            <Option>Kitchen</Option>
            <Option>Bedroom</Option>
            <Option>Sofa</Option>
          </Select>
        </Filter>
        <Filter>
          <SelectTitle>Filter By : </SelectTitle>
          <Select>
            <Option disabled selected>
              Popularity
            </Option>
            <Option>Newest</Option>
            <Option>Most Recent</Option>
            <Option>Rating</Option>
            <Option>Popular</Option>
          </Select>
        </Filter>
        <Filter>
          <SelectTitle>Filter By : </SelectTitle>
          <Select>
            <Option disabled selected>
              Prices
            </Option>
            <Option>500 - 1000</Option>
            <Option>1000 - 1500</Option>
            <Option>1500 - 2000</Option>
            <Option>2000 - 2500</Option>
            <Option>2500 - 3000</Option>
            <Option>3500 - 4000</Option>
          </Select>
        </Filter>
      </SelectContainer>
      <Featured />
      <Latest />
      <News />
    </Container>
  );
}

export default Shop;
