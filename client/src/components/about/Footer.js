import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <TextBox>
        <ContactText>
          con-
          <br />
          tact
        </ContactText>

        <SubTextBox>
          <JobText>
            <div>DESIGN</div>
            <div>DEVELOPE</div>
          </JobText>
          <ContactMailText>
            <div>236534@naver.com</div>
            <div>
              <span>seeeh0128@gmail.com</span>
              <br />
              wldbsl416@gmail.com
            </div>
          </ContactMailText>
        </SubTextBox>
      </TextBox>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: 366px;
  background-color: black;
  color: white;
  margin: 0 auto;
`;

const TextBox = styled.div`
  width: 956px;
  height: 235px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ContactText = styled.h2`
  font-family: "Stretch Pro Regular", sans-serif;
  color: white;
  font-size: 144px;
  font-weight: 400;
  line-height: 120px;
`;

const SubTextBox = styled.div`
  display: flex;
  margin: auto 0;
`;

const JobText = styled.div`
  color: #ff0000;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  gap: 21px;
`;

const ContactMailText = styled.div`
  color: white;
  font-size: 24px;
  line-height: 26px;
  font-weight: 400;
  transform: translateX(-10px);
  display: flex;
  flex-direction: column;
  gap: 15px;

  span {
    display: inline-block;
    margin-bottom: 5px;
  }
`;

export default Footer;
