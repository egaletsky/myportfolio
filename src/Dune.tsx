import styled from 'styled-components'

export function Dune() {
  return (
    <Page>
      <Card>
        <Image />
        <Title>Headline</Title>
        <Text>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
        </Text>
        <ButtonGroup>
          <Button>See more</Button>
          <Button>Save</Button>
        </ButtonGroup>
      </Card>
    </Page>
  )
}

const Page = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  width: 300px;
  height: 350px;
  padding: 10px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Image = styled.div`
  height: 170px;

  border-radius: 10px;
  background:
    url('/dune.jpeg'),
    lightgray 50%;
  background-size: cover;
`

const Title = styled.h1`
  color: #000;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 10px;
`
const Text = styled.p`
  color: #abb3ba;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  margin: 10px;
  line-height: 20px; /* 166.667% */
`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 10px;
`
const Button = styled.button`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #4e71fe;
  background: #fff;
  color: #4e71fe;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 200% */
  &:hover {
    background: #4e71fe;
    color: #fff;
  }
`
